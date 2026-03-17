# Encardio How-to Guides

A lightweight internal guide portal for Encardio employees. Browse and follow step-by-step instructions for common tools and services used across the organisation.

**Live site:** https://champak-encardio.github.io/champak-encardio/

---

## What it is

A React app that presents a searchable, filterable card grid of how-to guides. Clicking a card launches the full interactive guide. Each guide walks through a task with annotated screenshots and step markers.

## Adding a new guide

1. Create your guide component (e.g. `my-guide.js`) in the project root, following the same pattern as `home.js`:
   ```js
   import { useState } from "react";
   // ... your component
   export default function MyGuide() { ... }
   ```

2. Register it in `src/guides/index.js`:
   ```js
   import MyGuide from "../../my-guide.js";

   export const guides = [
     // existing guides...
     {
       id: "my-guide",
       title: "Title shown on the card",
       description: "One-sentence description shown on the card.",
       category: "Jira",          // used for the colour-coded pill + filter
       component: MyGuide,
     },
   ];
   ```

3. Commit and push to `main` — GitHub Actions builds and deploys automatically.

### Supported categories (colour-coded)

| Category   | Colour |
|------------|--------|
| Wiki.js    | Blue   |
| Confluence | Purple |
| GitHub     | Green  |
| Jira       | Orange |
| General    | Grey   |

Any unlisted category falls back to grey. Add new entries to `CATEGORY_COLORS` in `src/GuidePicker.jsx` to give it a custom colour.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/) via GitHub Actions
