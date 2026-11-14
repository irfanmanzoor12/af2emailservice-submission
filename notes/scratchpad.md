# Review analysis scratchpad

Working notes from tagging the practice reviews in `notes/reviews/` (simulated training data, not real customers). Files processed one at a time, 1 to 6. A review counts at most once per category; one review can count toward several categories.

## Category list

Defined after reading reviews-1.md. Reuse these exact names.

Positive:
- Clear, tidy reports
- Traceability and audit trail
- Helpful exception reports
- Human approval before anything is final
- Flags uncertainty instead of guessing
- Clean Excel export
- Spots transfers between own accounts (added in reviews-2.md)
- Explains its match suggestions (added in reviews-3.md)
- Groups recurring payments (added in reviews-5.md)

Complaints:
- Slow or difficult setup
- Unclear instructions or documentation
- Unreadable/badly formatted PDF statements
- Slow processing
- No direct QuickBooks import
- Poor matching when descriptions are missing
- Struggles with multiple bank accounts
- Excel export formatting problems (added in reviews-2.md)
- Exception report too long or noisy (added in reviews-2.md)
- Garbled characters in descriptions (added in reviews-4.md)

## reviews-1.md (20 reviews)

Tagging notes: R-013 ("note of who approved it") counted under Traceability, not Human approval. R-010 (setup guide skipped steps) counted under Unclear instructions, not Slow setup. R-017 counted under both Slow processing and Multiple bank accounts. R-006 "It worked" and R-015 "Useful once it was set up" not counted as positives (too generic).

- reviews-1.md | [Positive] Traceability and audit trail | count: 4 | "The audit trail is the best part. I could show our accountant exactly what changed and why."
- reviews-1.md | [Positive] Clear, tidy reports | count: 2 | "The reconciliation report was clear."
- reviews-1.md | [Positive] Helpful exception reports | count: 2 | "The exception report caught two duplicate payments we had missed."
- reviews-1.md | [Positive] Human approval before anything is final | count: 1 | "Good that nothing was marked final until our bookkeeper approved it."
- reviews-1.md | [Positive] Flags uncertainty instead of guessing | count: 1 | "I liked that it flagged what it wasn't sure about instead of guessing quietly."
- reviews-1.md | [Positive] Clean Excel export | count: 1 | "The Excel export was clean and easy to filter."
- reviews-1.md | [Complaint] Slow or difficult setup | count: 3 | "Getting started was slow. I had to map our accounts by hand"
- reviews-1.md | [Complaint] Unclear instructions or documentation | count: 2 | "Instructions assume you know accounting software well."
- reviews-1.md | [Complaint] Unreadable/badly formatted PDF statements | count: 2 | "Our scanned statements came out as nonsense. Numbers in the wrong columns, dates missing."
- reviews-1.md | [Complaint] Slow processing | count: 2 | "processing a three-month statement took longer than I expected."
- reviews-1.md | [Complaint] No direct QuickBooks import | count: 2 | "I expected a direct QuickBooks import."
- reviews-1.md | [Complaint] Poor matching when descriptions are missing | count: 1 | "Some card payments had blank descriptions, so the match suggestions for those were guesses at best."
- reviews-1.md | [Complaint] Struggles with multiple bank accounts | count: 1 | "With four accounts it got slow and a bit confusing."

Per-review IDs (for checking): Traceability R-002, R-009, R-013, R-020 | Clear reports R-001, R-013 | Exceptions R-004, R-011 | Human approval R-007 | Flags uncertainty R-018 | Excel R-016 || Setup R-002, R-003, R-015 | Instructions R-010, R-019 | PDF R-005, R-014 | Slow processing R-006, R-017 | QuickBooks R-008, R-016 | Blank descriptions R-012 | Multi-account R-017

## reviews-2.md (20 reviews)

Tagging notes: R-024 counted as both a positive (exception report useful) and a complaint (too long). R-031 (descriptions cut short) counted under "Poor matching when descriptions are missing", not PDF. R-026 (bank balance box read as transactions) counted under PDF statements, since it is a statement layout problem. R-022 (connecting statements folder, unclear errors) counted under setup only. R-040 "weekly runs since then have been smooth" not given its own positive (consistent with R-015 in file 1).

- reviews-2.md | [Positive] Traceability and audit trail | count: 2 | "Each line in the report linked back to the statement page. Our auditor appreciated that."
- reviews-2.md | [Positive] Clear, tidy reports | count: 2 | "Clear, plain reports. I'm not an accountant and I could still follow them."
- reviews-2.md | [Positive] Helpful exception reports | count: 2 | "Exception report found a payment recorded twice in our books."
- reviews-2.md | [Positive] Human approval before anything is final | count: 2 | "Liked that it never marked anything reconciled without our sign-off."
- reviews-2.md | [Positive] Spots transfers between own accounts | count: 1 | "Good at spotting transfers between our own accounts so they didn't show up as income."
- reviews-2.md | [Complaint] Slow or difficult setup | count: 3 | "Setup asked for things we didn't have to hand. We never got past the first screen."
- reviews-2.md | [Complaint] Slow processing | count: 2 | "each run took around twenty minutes for us."
- reviews-2.md | [Complaint] Unclear instructions or documentation | count: 2 | "The help page used a lot of terms I didn't know."
- reviews-2.md | [Complaint] Unreadable/badly formatted PDF statements | count: 1 | "The tool kept reading those as transactions."
- reviews-2.md | [Complaint] No direct QuickBooks import | count: 1 | "Expected it to post entries straight into QuickBooks. It only prepares them"
- reviews-2.md | [Complaint] Poor matching when descriptions are missing | count: 1 | "Some transaction descriptions were cut short, so I had to open the PDF anyway to check."
- reviews-2.md | [Complaint] Excel export formatting problems | count: 1 | "The Excel file had merged cells in the header, which broke our own formulas."
- reviews-2.md | [Complaint] Exception report too long or noisy | count: 1 | "Exception report was useful but long."

Per-review IDs: Traceability R-023, R-038 | Clear reports R-021, R-032 | Exceptions R-024, R-036 | Human approval R-027, R-034 | Transfers R-030 || Setup R-022, R-029, R-040 | Slow processing R-028, R-037 | Instructions R-033, R-039 | PDF R-026 | QuickBooks R-025 | Descriptions R-031 | Excel formatting R-035 | Exception noise R-024

## reviews-3.md (20 reviews)

Tagging notes: R-059 (catching unrecorded bank fees) counted under Helpful exception reports, consistent with R-004. R-050 ("check every number herself") counted under Traceability. R-052 (side-by-side bank/ledger view) counted under Clear reports. R-053 is a 3/5 mixed review but endorses human review ("Which, to be fair, is the point"), so counted under Human approval; it is a borderline call. R-056 (which file formats work) counted under Unclear instructions, not PDF.

- reviews-3.md | [Positive] Traceability and audit trail | count: 3 | "Clear audit trail. Every edit had a timestamp and a name."
- reviews-3.md | [Positive] Helpful exception reports | count: 3 | "Exception report is short and to the point."
- reviews-3.md | [Positive] Clear, tidy reports | count: 2 | "Matched, unmatched and needs-review, all clearly marked."
- reviews-3.md | [Positive] Human approval before anything is final | count: 1 | "Somebody still has to review. Which, to be fair, is the point."
- reviews-3.md | [Positive] Explains its match suggestions | count: 1 | "Good that it explains why it suggested a match, not just that it did."
- reviews-3.md | [Complaint] Slow or difficult setup | count: 2 | "Setup took two full days for a small firm."
- reviews-3.md | [Complaint] Slow processing | count: 2 | "Processing kept timing out on statements longer than about 30 pages."
- reviews-3.md | [Complaint] Unclear instructions or documentation | count: 2 | "didn't say which formats work. Found out the hard way."
- reviews-3.md | [Complaint] Unreadable/badly formatted PDF statements | count: 1 | "Our statement PDF uses a tiny font and grey shading. Quite a few amounts were misread."
- reviews-3.md | [Complaint] No direct QuickBooks import | count: 1 | "Wanted a QuickBooks Online export."
- reviews-3.md | [Complaint] Poor matching when descriptions are missing | count: 1 | "A lot of POS payments just said \"CARD TXN\" with a number."
- reviews-3.md | [Complaint] Excel export formatting problems | count: 1 | "Excel export dates came out in US format."

Per-review IDs: Traceability R-043, R-050, R-057 | Exceptions R-045, R-055, R-059 | Clear reports R-041, R-052 | Human approval R-053 | Explains matches R-047 || Setup R-044, R-060 | Slow processing R-048, R-058 | Instructions R-049, R-056 | PDF R-051 | QuickBooks R-042 | Descriptions R-046 | Excel formatting R-054

## reviews-4.md (20 reviews)

Tagging notes: PDF statements dominate this file. Seven clear PDF reading cases (R-061, R-063, R-064, R-066, R-070, R-072, R-074). Two borderline cases also counted: R-068 (password-protected PDFs the tool could not open) and R-078 (4/5, "Once our PDFs were sorted out"). Strict count without those two would be 7. R-078 also counted as positive for Clear reports and Helpful exception reports. R-079 (special characters as question marks) given its own new category, since the cause is unclear and nothing is missing. R-073 (wants own chart-of-accounts names in Excel) counted under Excel export formatting problems. R-069 "support notes helped" not given its own positive.

- reviews-4.md | [Complaint] Unreadable/badly formatted PDF statements | count: 9 | "Scanned statements from our older account were unreadable to it."
- reviews-4.md | [Positive] Clear, tidy reports | count: 2 | "Reconciliation report was tidy and easy to print for our files."
- reviews-4.md | [Positive] Traceability and audit trail | count: 2 | "Our accountant liked being able to trace any total back to the original bank lines."
- reviews-4.md | [Positive] Helpful exception reports | count: 2 | "Exception report flagged a cheque that cleared twice."
- reviews-4.md | [Positive] Human approval before anything is final | count: 2 | "Liked that every suggested match waited for a person to accept it."
- reviews-4.md | [Complaint] Slow or difficult setup | count: 1 | "Setup was long but the support notes helped."
- reviews-4.md | [Complaint] Slow processing | count: 1 | "Processing a full quarter took close to an hour."
- reviews-4.md | [Complaint] Unclear instructions or documentation | count: 1 | "Instructions for setting up matching rules were hard to follow."
- reviews-4.md | [Complaint] Excel export formatting problems | count: 1 | "I'd like the Excel export to keep our own chart-of-accounts names."
- reviews-4.md | [Complaint] Garbled characters in descriptions | count: 1 | "Descriptions with special characters came through as question marks."

Per-review IDs: PDF R-061, R-063, R-064, R-066, R-068*, R-070, R-072, R-074, R-078* (*borderline) | Clear reports R-062, R-078 | Traceability R-067, R-080 | Exceptions R-071, R-078 | Human approval R-065, R-075 || Setup R-069 | Slow processing R-076 | Instructions R-077 | Excel formatting R-073 | Garbled characters R-079

## reviews-5.md (20 reviews)

Tagging notes: R-086 (approval log) counted under Traceability, consistent with R-013 and R-043. R-093 "We still reviewed each one" not counted as Human approval, consistent with R-004 (a remark, not praise). R-083 "shows exactly what needs a person" counted under exception reports only. R-097 (needed a training session) and R-100 ("first two weeks were the hardest") counted under Slow or difficult setup, consistent with R-015; both are borderline. R-099 (payee names truncated) counted under Poor matching when descriptions are missing, consistent with R-031. No Human approval positive in this file.

- reviews-5.md | [Positive] Clear, tidy reports | count: 2 | "The summary at the top of each report told me straight away if we were in balance."
- reviews-5.md | [Positive] Helpful exception reports | count: 2 | "Exception report is the feature I'd miss most. It shows exactly what needs a person."
- reviews-5.md | [Positive] Traceability and audit trail | count: 2 | "Traceable lines made our internal review much faster."
- reviews-5.md | [Positive] Flags uncertainty instead of guessing | count: 1 | "Very clear about what it couldn't match."
- reviews-5.md | [Positive] Groups recurring payments | count: 1 | "Good at grouping recurring payments like rent and subscriptions."
- reviews-5.md | [Complaint] Slow or difficult setup | count: 4 | "Setup wizard froze twice. Had to start again each time."
- reviews-5.md | [Complaint] Unreadable/badly formatted PDF statements | count: 2 | "Our bank's PDF export has no proper text layer."
- reviews-5.md | [Complaint] Poor matching when descriptions are missing | count: 2 | "Bank descriptions are often just reference codes."
- reviews-5.md | [Complaint] No direct QuickBooks import | count: 1 | "Expected a QuickBooks Desktop export. Only got Excel and CSV in this beta."
- reviews-5.md | [Complaint] Unclear instructions or documentation | count: 1 | "Instructions jumped between screens that didn't look like the ones I had."
- reviews-5.md | [Complaint] Slow processing | count: 1 | "slow for anything over a few hundred lines."
- reviews-5.md | [Complaint] Excel export formatting problems | count: 1 | "Excel export had numbers stored as text."

Per-review IDs: Clear reports R-081, R-098 | Exceptions R-083, R-088 | Traceability R-086, R-091 | Flags uncertainty R-096 | Recurring R-093 || Setup R-084, R-094, R-097, R-100 | PDF R-085, R-095 | Descriptions R-087, R-099 | QuickBooks R-082 | Instructions R-089 | Slow processing R-090 | Excel formatting R-092

## reviews-6.md (20 reviews)

Tagging notes: R-105 (manager signs off every batch, tool keeps a record) counted under both Human approval and Traceability. R-120 counted under Clear reports, Traceability, Flags uncertainty ("honest about gaps") and Slow or difficult setup. R-104 counted as positive (exception report helpful) and complaint (flagged same item twice, under Exception report too long or noisy). R-119 (match QuickBooks account codes) counted under No direct QuickBooks import, not Excel formatting, because it names QuickBooks. R-118 ("We still make the decisions, which is how it should be") counted under Human approval, consistent with R-053. No new categories.

- reviews-6.md | [Positive] Traceability and audit trail | count: 4 | "Every match showed its source."
- reviews-6.md | [Positive] Clear, tidy reports | count: 2 | "Reports are clear enough that I could hand them to a new team member"
- reviews-6.md | [Positive] Helpful exception reports | count: 2 | "Exceptions came with a short reason, like \"amount differs by 0.50\". Very practical."
- reviews-6.md | [Positive] Human approval before anything is final | count: 2 | "We still make the decisions, which is how it should be."
- reviews-6.md | [Positive] Flags uncertainty instead of guessing | count: 2 | "Liked that unclear lines went to a review list instead of being matched anyway."
- reviews-6.md | [Positive] Clean Excel export | count: 1 | "Excel export worked well with our existing pivot tables."
- reviews-6.md | [Complaint] Slow or difficult setup | count: 3 | "It took us a week to get our account rules right."
- reviews-6.md | [Complaint] Slow processing | count: 2 | "Processing stalled on large statements with no progress bar."
- reviews-6.md | [Complaint] No direct QuickBooks import | count: 2 | "The manual import step was extra work."
- reviews-6.md | [Complaint] Unclear instructions or documentation | count: 2 | "The written guide was long. A one-page checklist would be easier."
- reviews-6.md | [Complaint] Unreadable/badly formatted PDF statements | count: 1 | "Our bank adds a promotional page in the middle of each statement PDF."
- reviews-6.md | [Complaint] Poor matching when descriptions are missing | count: 1 | "Many online payments just showed the payment processor's name, not the actual supplier."
- reviews-6.md | [Complaint] Exception report too long or noisy | count: 1 | "sometimes flagged the same item twice."

Per-review IDs: Traceability R-103, R-105, R-113, R-120 | Clear reports R-101, R-120 | Exceptions R-104, R-116 | Human approval R-105, R-118 | Flags uncertainty R-109, R-120 | Excel R-111 || Setup R-102, R-114, R-120 | Slow processing R-106, R-115 | QuickBooks R-107, R-119 | Instructions R-110, R-117 | PDF R-108 | Descriptions R-112 | Exception noise R-104

## Aggregate

Reviews counted: 20 + 20 + 20 + 20 + 20 + 20 = **120** (R-001 to R-120, matches the expected 120).

Totals were re-added from the per-file lines above and cross-checked by script. Every quote above was confirmed verbatim in its source file.

### Positives (sorted by total)

| Category | f1 | f2 | f3 | f4 | f5 | f6 | Total |
|---|---|---|---|---|---|---|---|
| Traceability and audit trail | 4 | 2 | 3 | 2 | 2 | 4 | 17 |
| Helpful exception reports | 2 | 2 | 3 | 2 | 2 | 2 | 13 |
| Clear, tidy reports | 2 | 2 | 2 | 2 | 2 | 2 | 12 |
| Human approval before anything is final | 1 | 2 | 1 | 2 | 0 | 2 | 8 |
| Flags uncertainty instead of guessing | 1 | 0 | 0 | 0 | 1 | 2 | 4 |
| Clean Excel export | 1 | 0 | 0 | 0 | 0 | 1 | 2 |
| Spots transfers between own accounts | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Explains its match suggestions | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Groups recurring payments | 0 | 0 | 0 | 0 | 1 | 0 | 1 |

### Complaints (sorted by total)

| Category | f1 | f2 | f3 | f4 | f5 | f6 | Total |
|---|---|---|---|---|---|---|---|
| Slow or difficult setup | 3 | 3 | 2 | 1 | 4 | 3 | 16 |
| Unreadable/badly formatted PDF statements | 2 | 1 | 1 | 9 | 2 | 1 | 16 |
| Unclear instructions or documentation | 2 | 2 | 2 | 1 | 1 | 2 | 10 |
| Slow processing | 2 | 2 | 2 | 1 | 1 | 2 | 10 |
| No direct QuickBooks import | 2 | 1 | 1 | 0 | 1 | 2 | 7 |
| Poor matching when descriptions are missing | 1 | 1 | 1 | 0 | 2 | 1 | 6 |
| Excel export formatting problems | 0 | 1 | 1 | 1 | 1 | 0 | 4 |
| Exception report too long or noisy | 0 | 1 | 0 | 0 | 0 | 1 | 2 |
| Struggles with multiple bank accounts | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| Garbled characters in descriptions | 0 | 0 | 0 | 1 | 0 | 0 | 1 |

### Notes on the ranking

- Top 5 positives: Traceability and audit trail (17), Helpful exception reports (13), Clear, tidy reports (12), Human approval before anything is final (8), Flags uncertainty instead of guessing (4).
- Top complaints: Slow or difficult setup and Unreadable/badly formatted PDF statements tie at 16. Third place is a tie at 10 between Unclear instructions or documentation and Slow processing.
- The PDF total includes two borderline reviews in reviews-4.md (R-068 password-protected PDFs, R-078 "Once our PDFs were sorted out"). Strict PDF total is 14 (f4 = 7), which would put PDF second behind setup.
- The PDF complaint is concentrated: 9 of its 16 mentions are in reviews-4.md.
- If "Slow or difficult setup" and "Unclear instructions or documentation" were merged into one onboarding theme, it would be the largest complaint by far (26 distinct reviews; no review is tagged in both). They are kept separate here.
