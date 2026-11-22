# The Wizard’s Quill UI redesign

Responsive HTML/CSS and ES-module JavaScript implementation based on the supplied mockup. Illustrated assets are cropped from the provided design. Story Forge uses the existing `/api/story` request contract; library and XP use browser localStorage. Word Hunt and Magic Canvas are lightweight new implementations, not ports of the legacy minigames.

## Install into existing repository
Create a new branch, copy `public/`, `api/`, `package.json` and `vercel.json` from this archive into the repository (back up original files first), then run `npm run check`. Remove the old root redirect `index.html` if it conflicts with the public directory. Set `GROQ_API_KEY` in Vercel, optionally set `GROQ_MODEL`, then run `npm run dev` or deploy the branch to Vercel. For static UI inspection only: `python -m http.server 8080 -d public` (API calls will not work in static mode).

No keys are embedded. API generation needs valid server credentials. The layout is a close recreation, not a verified pixel-perfect rendering; the original artwork is reused in cropped form. The preview illustration contains the original empty-state text; generated stories are shown above it in a scrollable parchment panel.
