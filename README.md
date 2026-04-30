# K & J Industries Static Site

A zero-build static website for **K & J Industries**, a family-led funding access agency helping business owners start clearer funding conversations through trusted funding partners.

This repo is intentionally simple: vanilla HTML, CSS, JavaScript, local JSON, embedded Tally forms, and Vercel static hosting. No framework. No bundler. No build step. No package manager required. Tiny site, sharp suit. 🥃

## Live Site

```text
https://kj-industries.vercel.app/
```

## Current Pages

```text
index.html      Homepage / credibility + path selection
team.html       Family-led team / founder credibility
funding.html    Funding access lanes and audience grid
apply.html      Business funding intake with embedded Tally form
partner.html    Partner recruitment page with embedded Tally form
```

## Current Data + Config Files

```text
data/site.json       Brand, SEO, CTA, hero, disclaimer, homepage metric data
data/sections.json   JSON-rendered homepage sections
vercel.json          Static Vercel config, redirects, headers
```

## Current CSS / JS Files

```text
css/tokens.css       Design tokens: colors, type scale, radii, shadows
css/components.css   Shared UI components
css/styles.css       Core page layout and homepage styles
css/pages.css        Multi-page styles, form layouts, partner/funding sections
css/motion.css       Premium motion layer: shimmer, spotlight, progress bar

js/store.js          Loads local JSON content
js/render.js         Renders homepage JSON sections
js/main.js           Nav, FAQ, reveal behavior, shared page logic
js/effects.js        Scroll progress, page loaded state, spotlight effects
```

## Key CTAs

### Funding application

Primary branded path:

```text
/go/funding-application
```

Current redirect destination:

```text
https://bit.ly/fundingwithdarwin
```

The `apply.html` page also embeds the funding Tally form:

```text
https://tally.so/embed/w4R2Ad
```

### Partner application

Partner page:

```text
/partner
```

Partner Tally form:

```text
https://tally.so/embed/mOe658
```

## Local Preview

Do **not** open `index.html` directly. The homepage uses `fetch()` to load JSON from `/data`, so it needs a local server.

### Python

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

On some Windows machines:

```bash
python -m http.server 8080
```

### Node

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Vercel Deployment

Recommended Vercel settings:

```text
Framework preset: Other / No Framework
Build command: blank
Install command: blank
Output directory: blank or root
```

This repo has no `package.json` because it does not need one.

## Editing Copy

### Homepage brand / hero / CTA

Edit:

```text
data/site.json
```

Use this for:

- Brand name
- Tagline
- SEO title and description
- Primary CTA label and URL
- Hero eyebrow, title, subtitle, note
- Homepage metric cards
- Footer disclaimer

### Homepage JSON-rendered sections

Edit:

```text
data/sections.json
```

Use this for:

- Funding access snapshot
- Services cards
- Process section
- Professional standards
- Family-led agency section
- FAQ
- Final CTA

### Static page copy

Edit the matching HTML file directly:

```text
team.html
funding.html
apply.html
partner.html
```

## Editing Visual Design

Start with tokens:

```text
css/tokens.css
```

Then adjust page-specific sections in:

```text
css/pages.css
```

Motion and premium interaction polish lives in:

```text
css/motion.css
js/effects.js
```

Keep motion respectful. The site should feel premium, not like a casino app having a panic attack.

## Recommended Future Site Files / Pages

High-value additions:

```text
about.html          Deeper story, standards, and role clarity
resources.html      Funding readiness resources and checklists
faq.html            Expanded FAQ for applicants and partners
goals.html          Funding readiness / amount-planning explainer
thank-you.html      Post-form or redirect confirmation page
privacy.html        Basic privacy policy placeholder
terms.html          Basic terms / usage disclaimer
```

High-value Markdown docs:

```text
AGENTS.md                   AI/editor instructions for future site agents
ROADMAP.md                  Site roadmap and next slices
CONTENT-GUIDE.md            Voice, tone, compliance, and copy rules
COMPLIANCE.md               Funding language guardrails
MARKDOWN-USAGE.md           How Markdown docs should be used in this repo
.github/workflows/*.yml     GitHub Actions quality checks
```

## Markdown Strategy

Markdown files are useful for **instructions, planning, and source-of-truth docs**. They are not currently rendered as public web pages.

Use Markdown for:

- AI agent instructions
- Site roadmap
- Copy guidelines
- Compliance rules
- Manual QA checklist
- Future page specs
- Launch checklist

Use HTML for:

- Public web pages
- Landing pages
- Embedded forms
- Conversion sections

## `AGENTS.md` Strategy

`AGENTS.md` should tell AI coding assistants and future contributors how to work in this repo:

- Keep vanilla static.
- No Next.js unless explicitly approved.
- No external fonts/libraries unless approved.
- Preserve compliance language.
- Do not mention backend partners unless approved.
- Keep CTAs routed through `apply.html`, `partner.html`, or `/go/funding-application`.
- Avoid lender claims or guaranteed funding language.

An `agents.html` public page is different. That would be a marketing page for actual human funding partners/agents. For this repo, `partner.html` already serves that role. Create `agents.html` only if K & J Industries wants a public “agent resources” or “partner portal teaser” page later.

## SEO Checklist

Before custom-domain launch:

- Replace canonical placeholders with the final domain.
- Add `og-image.jpg` at repo root.
- Confirm meta titles and descriptions on all pages.
- Confirm only one H1 per page.
- Confirm all internal links work.
- Add `privacy.html` if collecting form submissions.
- Add local city/state only if K & J wants local SEO positioning.

## Performance Checklist

- Keep images compressed.
- Keep Darwin headshot under ~300 KB if possible.
- Keep `og-image.jpg` under ~500 KB if possible.
- Avoid external fonts.
- Avoid new JavaScript dependencies.
- Test on mobile width even if desktop is the current priority.
- Confirm no console errors.

## Accessibility Checklist

Included basics:

- Semantic header, nav, main, sections, footer.
- Skip link.
- Keyboard focus states.
- Accessible mobile nav toggle.
- FAQ buttons with `aria-expanded`.
- Reduced-motion support.
- Strong dark-background contrast.

Before launch:

- Test tab order.
- Confirm Tally embed is usable with keyboard.
- Confirm CTA links are descriptive.
- Confirm page headings follow a logical order.

## Compliance Notes

Required disclaimer:

```text
K & J Industries is not a lender and does not guarantee approvals, terms, funding amounts, or timelines. Services are referral and relationship-based through trusted funding partners.
```

Avoid language that says or implies:

- Guaranteed approval
- Guaranteed funding
- Guaranteed rates or terms
- Guaranteed same-day funding
- K & J Industries directly funds deals
- K & J Industries is a lender
- Specific lender claims
- Named backend funding partners unless intentionally approved

Preferred language:

- Funding conversations
- Funding access
- Trusted funding partners
- May connect
- When appropriate
- Review path
- Partner-fit direction
- Funding readiness

## Troubleshooting

### Page content does not load locally

Run a server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

### Tally form is too tall or too short

Edit iframe height and CSS in:

```text
apply.html
partner.html
css/pages.css
```

The current form embed uses Tally dynamic height plus a CSS minimum height. Do not set a massive minimum height unless the form truly needs it.

### Partner CTA opens email

Search for stale mailto links:

```bash
grep -R "Become a Partner.*mailto" .
```

Partner CTAs should point to:

```text
partner.html
```

### Vercel deploy tries to build

Use No Framework / Other. Leave install, build, and output settings blank/root.

### Cache looks stale

Hard refresh:

```text
Ctrl + Shift + R
```

CSS and JS files use versioned URLs in some places. Increment query strings if needed:

```text
css/motion.css?v=2
js/effects.js?v=2
```
