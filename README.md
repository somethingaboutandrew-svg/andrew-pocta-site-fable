# Andrew Pocta — Builder

Personal website showcasing apps, games and field tools built with AI.

**Live site:** https://andrewpocta.netlify.app (updates automatically from the `main` branch)

## Edit the words on the site (no coding)

1. Open **`content.js`** on GitHub.
2. Click the **pencil icon** (Edit this file) at the top right of the file.
3. Change the text between the "quotes". Keep the quotes, commas and brackets.
   - Bold: wrap words in double stars, like `**this**`.
   - Anything still marked `[PLACEHOLDER: ...]` is hidden from visitors (see below).
4. Click **Commit changes** (green button), then **Commit changes** again.
5. The live site updates in about a minute.

## See what's still missing
Visitors never see `[PLACEHOLDER: ...]` text. To see it as amber tags, open
**https://andrewpocta.netlify.app/?draft**

## Add pictures (headshot or screenshots)
1. Open the **images** folder on GitHub, click **Add file → Upload files**, drag your pictures in, click **Commit changes**.
2. In `content.js`, put the path in quotes:
   - headshot: `photo: "images/andrew.jpg",`
   - screenshots: `images: ["images/game-night-1.png", "images/game-night-2.png"]`
     (the first screenshot of a project is shown large; the others appear as small pictures you can click)
3. Commit. The pictures show up in about a minute.

Tip: use simple file names (lowercase, no spaces), e.g. `math-mystic-1.png`.

If the site ever goes blank after an edit, a quote or comma probably got deleted. Open the file's **History** and compare with the previous version, or ask Claude to fix it.

## Files

| File | What it is |
|---|---|
| `content.js` | All the words, projects and links. **Edit this one.** |
| `index.html` | Design and layout. Change through Claude Code. |
| `CLAUDE.md` | Rules for Claude when working on this site. |
| `tests/verify.mjs` | Automated check that the site still works. |
| `netlify.toml` | Hosting settings for Netlify. |
| `images/` | Your headshot and screenshots. |
| `family-hub/` | Live Family Hub demo (web build). |
| `og.png`, `favicon.svg` | Link-preview image and browser-tab icon. |
