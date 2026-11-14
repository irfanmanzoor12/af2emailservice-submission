---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign for each lead group

Campaign folder: $ARGUMENTS

## 1. Check the campaign folder

If no campaign folder was given above, stop. Use Glob on `campaigns/*/` to find the campaign folders that exist, list them, and ask which one to use. Don't write any files.

If the folder was given but has no `emails/` folder with email files in it, stop and say so.

## 2. Find the lead groups

Read `leads/leads.csv` and collect the distinct values in the `group` column. Right now these are `small-business-owners`, `accounting-firms` and `finance-managers`, but always use what the file says.

Only use the group names. Don't copy names, email addresses or any other lead details into the emails.

## 3. Read the rules and the emails

- Read `brand/voice.md` for the voice, the words to avoid and the claims we must never make.
- Read `.claude/rules/emails.md` for the email file rules.
- Use Glob to list `<campaign folder>/emails/*.md` and read each email.

## 4. Write one version per email per group

For each group and each email, write a copy to:

`<campaign folder>/groups/<group>/emails/<same file name>`

Change only two things:

1. **The opening line**: the first sentence after the greeting. Rewrite it so it speaks to that group's situation.
2. **One example**: one sentence or bullet that gives an example. Swap it for an example that fits that group's day-to-day work.

Keep everything else exactly the same, word for word:

- the `Subject:` and `Preview:` lines,
- the greeting with `{{first_name}}`,
- the structure, headings and the order of the paragraphs,
- the one main link and its button text,
- the sign-off and the plain-text footer.

The new sentences must follow `brand/voice.md`. Use plain English, make no claims we can't back up, invent no numbers or results, and keep the client's team in control of decisions. Never use a word or claim from its "avoid" or "never" lists.

Don't change the original emails. Don't send anything.

## 5. Reply with a short summary only

When you're done, reply with only:

- how many files you wrote, and
- one example opening line for each group.

Don't paste the full emails or explain each change.
