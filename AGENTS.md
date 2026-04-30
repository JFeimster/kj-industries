# AGENTS.md

Instructions for AI coding assistants, repo operators, and future contributors working on the K & J Industries static site.

## Project Type

This is a vanilla static website.

Do not convert this repo to Next.js, React, Astro, Vite, or any framework unless explicitly approved.

## Hard Rules

- Keep the site static.
- No build step.
- No package manager requirement.
- No external fonts unless explicitly approved.
- No external libraries unless explicitly approved.
- Preserve accessibility basics.
- Preserve compliance language.
- Do not mention backend funding partners by name unless explicitly approved.
- Do not mention Moonshine Capital.
- Do not imply K & J Industries is a lender.
- Do not guarantee approvals, funding, rates, terms, amounts, or timelines.

## Preferred Language

Use:

- funding conversations
- funding access
- trusted funding partners
- funding readiness
- review path
- partner-fit direction
- when appropriate
- may connect

Avoid:

- guaranteed approval
- guaranteed funding
- instant approval
- best rates
- direct lender
- lender network claims that are not verified
- same-day funding as a guarantee

## Current Public Pages

```text
index.html
team.html
funding.html
apply.html
partner.html
```

## Current Important Routes

```text
/go/funding-application
```

The route above is configured in `vercel.json` and currently redirects to the affiliate funding application.

## Tally Embeds

Funding intake form:

```text
https://tally.so/embed/w4R2Ad
```

Partner application form:

```text
https://tally.so/embed/mOe658
```

## Where to Edit

Use `data/site.json` and `data/sections.json` for homepage JSON-rendered content.

Use individual HTML files for static page copy.

Use `css/pages.css` for page-specific layout.

Use `css/motion.css` and `js/effects.js` for premium interaction polish.

## Design Direction

Dark premium funding agency aesthetic:

- refined gold accents
- premium but approachable
- family-led
- main-street business funding
- luxury bento layout
- clear CTAs
- no VC/crypto energy

## Commit Guidance

Use clear commit messages:

- `Update homepage conversion sections`
- `Add partner page copy`
- `Fix apply form layout`
- `Add static checks workflow`

Avoid giant mystery commits like `changes` or `fix stuff` unless the site is on fire and the goblins are winning.
