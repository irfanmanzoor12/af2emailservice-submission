#!/usr/bin/env node
// Send guard: a PreToolUse hook for the Resend MCP server.
//
// CLAUDE.md states the policy. This hook enforces it:
// email may go only to Resend test addresses (ending in @resend.dev)
// or to the studio owner's own address, read from the MY_EMAIL
// environment variable.
//
// Exit 0 = allow the tool call. Exit 2 = block it; the reason on
// stderr is shown to Claude. Anything unexpected is blocked (fail closed).

import { readFileSync } from "node:fs";

const PREFIX = "mcp__resend__";

// Tools that send to recipients named in the call. Every address is checked.
const RECIPIENT_CHECKED = new Set(["send-email", "send-batch-emails"]);

// Tools that send to recipients the guard cannot see in the call
// (a segment, a saved draft, an automation, a thread's participants),
// or that the studio does not use. Always blocked.
const ALWAYS_BLOCKED = new Set([
  "send-broadcast",
  "create-automation",
  "update-automation",
  "duplicate-automation",
  "send-event", // fires automations, which send email
  "send-inbox-draft",
  "send-new-inbox-email",
  "reply-to-inbox-thread-email",
  "forward-inbox-thread-email",
]);

// Any other tool whose name looks like a send is treated as an
// unrecognised sending operation and blocked rather than allowed.
const LOOKS_LIKE_SENDING = /(^|-)(send|forward|reply)(-|$)/;

const ADDRESS = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

function block(reason) {
  process.stderr.write(`Send guard blocked this call: ${reason}\n`);
  process.exit(2);
}

function allow() {
  process.exit(0);
}

function ownEmail() {
  const raw = (process.env.MY_EMAIL || "").trim().toLowerCase();
  return ADDRESS.test(raw) ? raw : null;
}

function checkAddress(value, where) {
  if (typeof value !== "string") {
    block(`${where} has a recipient that is not a plain email address string.`);
  }
  const address = value.trim();
  if (!ADDRESS.test(address)) {
    block(`${where} has a malformed or unsupported recipient "${value}". Use a plain address like name@resend.dev.`);
  }
  const lower = address.toLowerCase();
  if (lower.endsWith("@resend.dev")) return;
  const mine = ownEmail();
  if (mine && lower === mine) return;
  block(`${address} (in ${where}) is not allowed. Send only to @resend.dev test addresses or to MY_EMAIL.`);
}

// `required` is true for "to": it must exist and hold at least one address.
function checkField(email, field, label, required) {
  const value = email[field];
  if (value === undefined || value === null) {
    if (required) block(`${label}.${field} is missing.`);
    return;
  }
  const list = typeof value === "string" ? [value] : value;
  if (!Array.isArray(list)) {
    block(`${label}.${field} has an unknown recipient format.`);
  }
  if (required && list.length === 0) {
    block(`${label}.${field} has no recipients.`);
  }
  list.forEach((address, i) => checkAddress(address, `${label}.${field}[${i}]`));
}

function checkEmail(email, label) {
  if (!email || typeof email !== "object" || Array.isArray(email)) {
    block(`${label} is not a valid email object.`);
  }
  checkField(email, "to", label, true);
  checkField(email, "cc", label, false);
  checkField(email, "bcc", label, false);
}

let call;
try {
  call = JSON.parse(readFileSync(0, "utf8"));
} catch {
  block("could not read the tool call from stdin.");
}

const toolName = call && typeof call.tool_name === "string" ? call.tool_name : null;
if (!toolName) block("the tool call has no tool_name.");

// Not a Resend tool: nothing to guard.
if (!toolName.startsWith(PREFIX)) allow();

const tool = toolName.slice(PREFIX.length);
const input = call.tool_input;

if (ALWAYS_BLOCKED.has(tool)) {
  block(`${toolName} is not allowed in this studio. Use send-email with approved test recipients.`);
}

if (RECIPIENT_CHECKED.has(tool)) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    block(`${toolName} has no valid tool_input.`);
  }
  if (tool === "send-email") {
    checkEmail(input, "email");
  } else {
    const emails = input.emails;
    if (!Array.isArray(emails) || emails.length === 0) {
      block("send-batch-emails needs a non-empty emails list.");
    }
    emails.forEach((email, i) => checkEmail(email, `emails[${i}]`));
  }
  allow();
}

if (LOOKS_LIKE_SENDING.test(tool)) {
  block(`${toolName} is a sending operation the guard does not recognise.`);
}

allow();
