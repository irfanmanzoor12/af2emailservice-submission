---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

These rules apply to every email file in any campaign. Each email file must follow all of them.

1. **Subject and preview first.** The first line is `Subject: ...` and is 50 characters or fewer. The second line is `Preview: ...` and is 90 characters or fewer. Count the whole line, including `Subject: ` or `Preview: `.
2. **Greet by name.** Greet the reader with `{{first_name}}`, for example `Hi {{first_name}},`.
3. **One main link.** Use exactly one main link, written like this:
   `[Button text](https://ledgerflow.example/subscribe)`
   Change the button text to suit the email, but keep the link the same. Don't add any other links in the body.
4. **Sign off, then the footer.** End with our sign-off from `brand/voice.md`. Then add this two-line footer as plain text, not inside a code block:

You're receiving this because you joined the LedgerFlow AI waitlist.
LedgerFlow AI, [Business address] · Unsubscribe: {{unsubscribe_url}}
