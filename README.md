# K & J Industries Static Landing Page

A zero-build static landing page for **K & J Industries**, a family-led funding access agency.

This is intentionally lightweight: vanilla HTML, CSS, JavaScript, local JSON content, no external libraries, no external fonts, and no framework build step.

## Project Structure

```text
index.html
css/tokens.css
css/components.css
css/styles.css
js/store.js
js/render.js
js/main.js
data/site.json
data/sections.json
vercel.json
README.md
```

## Fastest Visual Preview

Do not open `index.html` directly in the browser. The page uses `fetch()` to load local JSON files from `/data`, so it needs a local server.

### Option 1: Python

From the project root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

On some Windows machines, use:

```bash
python -m http.server 8080
```

### Option 2: Node

From the project root:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Editing Copy and Content

Most content lives in:

```text
data/site.json
data/sections.json
```

Edit `data/site.json` for:

- Brand name
- Tagline
- SEO title and description
- CTA label
- CTA mailto URL
- Hero copy
- Footer disclaimer

Edit `data/sections.json` for:

- Snapshot section
- Services
- Process steps
- Professional standards
- Family-led agency section
- FAQ
- Final CTA

## Editing Visual Design

Design tokens live in:

```text
css/tokens.css
```

Use this file to edit:

- Primary gold accent
- Background colors
- Parchment/off-white tones
- Border colors
- Font stacks
- Border radii
- Shadows
- Responsive text sizing

Component-level design lives in:

```text
css/components.css
css/styles.css
```

## Deployment: GitHub to Vercel Static Project

1. Create a new GitHub repository.
2. Add all files from this repo.
3. Push to GitHub.
4. In Vercel, choose **Add New Project**.
5. Import the GitHub repo.
6. Framework preset: **Other** or **No Framework**.
7. Build command: leave blank.
8. Output directory: leave blank or use root `/`.
9. Install command: leave blank.
10. Deploy.

This is a static project. There is no package manager requirement and no build step.

## CTA Setup

Current placeholder CTA:

```text
hello@kjindustriesfunding.com
```

Current CTA URL:

```text
mailto:hello@kjindustriesfunding.com?subject=Funding%20Conversation%20with%20K%20%26%20J%20Industries
```

Change this in:

```text
data/site.json
```

## SEO Checklist

Before deploying publicly:

- Replace canonical placeholder with the final domain.
- Add a real Open Graph image and update `index.html`.
- Confirm meta title is under roughly 60 characters.
- Confirm meta description is under roughly 160 characters.
- Add final business contact email.
- Add city/state only if the agency wants local positioning.
- Confirm the page has only one H1.
- Confirm all navigation anchors work.
- Confirm final copy does not make lender claims.

## Performance Checklist

This site is intentionally performance-light.

Before launch:

- Keep images out unless needed.
- If adding images, compress them before committing.
- Avoid external fonts unless the project moves past visual approval.
- Keep JSON small and human-editable.
- Test mobile layout at 375px width.
- Run Lighthouse or Chrome DevTools performance audit.
- Confirm no console errors.

## Accessibility Checklist

Included basics:

- Semantic header, nav, main, sections, footer.
- Skip link.
- Keyboard focus states.
- Accessible mobile nav toggle.
- FAQ buttons with `aria-expanded`.
- Reduced-motion support.
- Good contrast against dark background.

Before launch:

- Test tab order.
- Confirm focus states are visible.
- Confirm all CTA links are descriptive.
- Confirm content is readable on mobile.

## Compliance Notes

Required disclaimer:

```text
K & J Industries is not a lender and does not guarantee approvals, terms, funding amounts, or timelines. Services are referral and relationship-based through trusted funding partners.
```

Avoid adding language that says or implies:

- Guaranteed approval
- Guaranteed funding
- Guaranteed rates or terms
- Same-day funding guarantees
- K & J Industries directly funds deals
- K & J Industries is a lender
- Named backend funding partners unless intentionally approved later

Use language like:

- "trusted funding partners"
- "funding conversations"
- "funding access"
- "relationship-based"
- "may connect"
- "when appropriate"

## Troubleshooting

### The page is blank or content does not load

Cause: You opened `index.html` directly.

Fix:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

### JSON error in console

Cause: Invalid JSON, usually a missing comma, extra comma, or unescaped quote.

Fix:

- Validate `data/site.json`.
- Validate `data/sections.json`.
- Use a JSON formatter or validator.

### Styles are not loading

Check that these files exist:

```text
css/tokens.css
css/components.css
css/styles.css
```

Also confirm paths in `index.html` have not changed.

### CTA opens the wrong email

Edit:

```text
data/site.json
```

Specifically:

```json
"cta": {
  "label": "Start a Funding Conversation",
  "href": "mailto:hello@kjindustriesfunding.com?subject=Funding%20Conversation%20with%20K%20%26%20J%20Industries"
}
```

### Vercel deploy tries to build

Use:

- Framework preset: Other / No Framework
- Build command: blank
- Install command: blank
- Output directory: blank or root

This repo has no `package.json` because it does not need one.
