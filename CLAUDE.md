# CLAUDE.md: Andrew Pocta — Builder (personal site)

## What this is
Andrew's personal "builder" website: a single static page in the v4 "Showreel" style (black #070707, warm off-white text, one lime accent #d6ff3f, Archivo condensed poster type + JetBrains Mono). One project per screen. Hosted on Netlify at **https://andrewpocta.netlify.app**, auto-deployed from this repo's `main` branch. No build step.

This repo (`andrew-pocta-site-fable`) started as a copy of the original site and became the primary site on Nov 11, 2026. The older repo `andrew-pocta-site` holds the previous v3 design; **don't touch it** unless Andrew asks. Canonical, og, sitemap and robots URLs must point at andrewpocta.netlify.app (the verification checks this).

## Structure
- `content.js`: ALL user-facing words, projects and links (`window.SITE`). Andrew edits this by hand on GitHub. Keep its comments and format simple.
- `index.html`: design, layout and behavior. Renders everything from `window.SITE`.
- `tests/verify.mjs`: deterministic verification (Playwright).
- `images/`: headshot (`SITE.photo`), project screenshots (`project.tileImages` + `project.images`, shown together: first one large, the rest as thumbnails that swap in; click the large one to enlarge) and video posters (`project.poster`).
- `media/`: demo videos (`project.video`, H.264 MP4, faststart). Projects with a video get a Watch demo button.
- `family-hub/`: Expo web build of the Family Hub demo, served at /family-hub/ (uploaded by Andrew; don't edit by hand). It uses the sample "Rivera family" data; never add real-family screenshots.
- `og.png`: link-preview image (1200×630), a render of the hero.

## Layout (v4)
- Fixed header: name, Work / Process / About, Jump (⌘K), Contact. On phones the links collapse into a Menu button that opens the same jump list.
- Hero: "I build useful {headlineWords} with AI." in poster type, photo + intro underneath.
- `#work`: one `.scene` per project (`#p-<id>`), `nowBuilding` project first, the rest in `content.js` order. Each scene: number, status pill, title, summary, Live demo / Watch demo buttons, a "Project notes" toggle (`button[data-p]` → `#n-<id>`), and a screenshot stage tinted with the project's `color`. `contours: true` draws contour lines behind that scene.
- Desktop only: a fixed rail on the right lists the projects and marks the current one.
- `#process`, `#about`, `#contact`, footer.
- Placeholders are hidden from visitors; `?draft` shows every one as an amber tag. Projects with an http(s) or /path `link` get a Live demo button.

## Rules
1. **Never invent facts.** Unknown details stay as `[PLACEHOLDER: ...]` (rendered as amber tags in `?draft`). No made-up stats, dates, users or testimonials.
2. Copy changes go in `content.js`, never hard-coded in `index.html`. Keep the wording in `content.js` exactly as Andrew wrote it.
3. Keep `content.js` editable by a non-coder: plain strings, comments explaining each field, no functions.
4. Only include credentials Andrew has asked for (e.g. the FAA Part 107 line was added at his request on Nov 4, 2026).
5. Version-label significant redesigns (v2, v3…) and keep prior versions recoverable (git tags `v3`, `v4`…).
6. Run the verification before every commit that touches `index.html`, before adding any new feature, and before every push. Pushing to `main` deploys the live site, so ask Andrew first.
7. Design guardrails: one accent (lime) in the chrome; project colors only inside their own scene; no gradients, glows or looping animations; motion is transform/opacity only, ≤300 ms, and respects reduced motion; spacing on a 4 px grid; tap targets ≥44 px.

## Verification (definition of done)
```
npm i -D playwright@latest && npx playwright install chromium-headless-shell   # first time only
node tests/verify.mjs
```
(`package.json` is git-ignored on purpose so Netlify stays a no-build deploy.)

Must print `PASS` for every check:
- canonical, og, sitemap and robots URLs use andrewpocta.netlify.app
- page loads with zero console errors and every image file loads (1440 px and 390 px)
- no horizontal overflow at 1440 px and 390 px widths
- the `nowBuilding` project comes first; every project in `content.js` renders a scene with its title, all its screenshots, and notes that open and close
- screenshots enlarge in the viewer; Escape closes it
- every live link and video shows a Live demo / Watch demo button; Watch demo opens the video
- ⌘K / Ctrl+K palette opens, lists every project and closes; on phones Menu opens it and picking a project jumps there
- visitors see no [PLACEHOLDER] tags; `?draft` shows every one
- process shows every step and tool; about shows the quote, bio and CV rows; contact shows the email and all links
- phone tap targets are at least 44 px tall
- with reduced motion on, content is visible without animation

## History
- v4 (Nov 11, 2026): "Showreel" redesign, picked from 3 prototyped directions (Field Sheet, Workbench, Showreel). One project per screen, poster type, project rail, native-dialog viewer and jump list, new og image, favicon and 404. This repo became the primary site at andrewpocta.netlify.app.
- v3 (Nov 4, 2026): sideways-scrolling project row (+RollForge, 757 Locals App, InkFreeze), on-tile screenshots with lightbox, new bio/CV/quote, X link, 501(c)(3) font-ligature fix. Tagged `v3`.
- v2.2 (Nov 4, 2026): headshot, demo videos (Game Night, Wetlands), Math Mystic art, Family Hub sample-data screenshot.
- v2.1 (Nov 4, 2026): launch prep — Live demo buttons, draft mode, photo/screenshot support, OG image, favicon, 404, sitemap.
- v2 (Nov 3, 2026): Liquid Glass bento (concept 3A); content moved to `content.js`.
- v1 (Nov 2, 2026): dark topographic one-pager.
