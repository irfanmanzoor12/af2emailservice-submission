#!/usr/bin/env node
// Headless brand review of a campaign's emails.
//
// Usage: node scripts/review.mjs <campaign folder>
// Example: node scripts/review.mjs campaigns/test-bad
//
// Runs `claude -p` with read-only tools, asks for JSON that matches
// review/findings.schema.json, saves it to review/findings.json and prints
// a one-line summary.
//
// Exit codes: 0 = no high-severity findings, 1 = at least one high-severity
// finding, 2 = the review itself could not run (bad folder, claude failed,
// or its output could not be read).

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const studio = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = join(studio, "review", "findings.schema.json");
const outPath = join(studio, "review", "findings.json");

function fail(message) {
  console.error(`review: ${message}`);
  process.exit(2);
}

const folderArg = process.argv[2];
if (!folderArg) fail("usage: node scripts/review.mjs <campaign folder>");

const folderAbs = resolve(process.cwd(), folderArg);
if (!existsSync(folderAbs) || !statSync(folderAbs).isDirectory()) {
  fail(`folder not found: ${folderArg}`);
}
const folder = relative(studio, folderAbs).split(sep).join("/");

// Only files inside an emails/ folder count as emails, at any depth
// (so group versions in groups/<group>/emails/ are included, and
// plan.md or email-map.md are not).
function findEmails(dir, insideEmails = false) {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...findEmails(path, entry.name === "emails"));
    } else if (insideEmails && entry.name.endsWith(".md")) {
      found.push(relative(studio, path).split(sep).join("/"));
    }
  }
  return found.sort();
}

const emails = findEmails(folderAbs);
if (emails.length === 0) fail(`no email files found in an emails/ folder under ${folder}`);

const schemaText = readFileSync(schemaPath, "utf8");

const prompt = [
  `Review every email in ${folder} against brand/voice.md and .claude/rules/emails.md. Report only real problems.`,
  "",
  "The emails are exactly these files. Review only these. Other files in the folder, like plan.md or email-map.md, are not emails:",
  ...emails.map((f) => `- ${f}`),
  "",
  "Use the file path exactly as listed above, and the line number where the problem is.",
  "Severity: high = breaks a rule or makes a claim brand/voice.md forbids; medium = likely to mislead or clearly off-voice; low = small wording or style issue.",
  "If an email has no real problems, report nothing for it. If no email has problems, return an empty findings array.",
].join("\n");

const result = spawnSync(
  "claude",
  [
    "-p", prompt,
    "--output-format", "json",
    "--json-schema", schemaText,
    "--allowedTools", "Read,Glob,Grep",
  ],
  { cwd: studio, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] },
);

if (result.error) fail(`could not start claude: ${result.error.message}`);
if (result.status !== 0) {
  const detail = (result.stderr || result.stdout || "").trim().split("\n").slice(-5).join("\n");
  fail(`claude exited with code ${result.status}${detail ? `\n${detail}` : ""}`);
}

let parsed;
try {
  parsed = JSON.parse(result.stdout);
} catch {
  fail("claude's output was not valid JSON");
}

// The output is either one result object, or a list whose last item is the result.
let final = parsed;
if (Array.isArray(parsed)) {
  final = parsed.findLast((item) => item && item.type === "result") ?? parsed.at(-1);
}
if (!final || typeof final !== "object") fail("claude's output had no result");
if (final.is_error) fail(`claude reported an error: ${final.result ?? final.subtype ?? "unknown"}`);

const output = final.structured_output;
if (!output || !Array.isArray(output.findings)) {
  fail("claude's result had no structured_output with a findings array");
}

writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n");

const count = (s) => output.findings.filter((f) => f.severity === s).length;
const high = count("high");
console.log(
  `${folder}: ${emails.length} email(s) reviewed, ${output.findings.length} finding(s) ` +
    `(${high} high, ${count("medium")} medium, ${count("low")} low). Saved to review/findings.json`,
);

process.exit(high > 0 ? 1 : 0);
