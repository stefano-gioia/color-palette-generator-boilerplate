# 🎨 Color Palette Generator — Boilerplate

A starter project for a beginner JavaScript exercise. The UI and styles are fully
provided — your job is to wire up the interactivity by completing the TODO sections
in `main.js`.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

---

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/color-palette-generator-boilerplate.git
cd color-palette-generator-boilerplate

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) to see the app.

Other available scripts:

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project structure

```
color-palette-generator-boilerplate/
├── index.html   ← page markup (do not modify)
├── style.css    ← complete stylesheet (do not modify)
├── main.js      ← ⭐ your working file
└── package.json
```

**You only need to edit `main.js`.**

---

## What you need to implement

Open `main.js` and look for the seven `// TODO` comments. Each one has a short hint
right below it. Here is an overview of what each TODO asks you to do:

### Inside `createCard(hex)` — builds one color card

| TODO | What to do |
|------|------------|
| **TODO 1** | Set the card's `backgroundColor` to `hex` and its `color` to the result of `getTextColor(hex)`, so the text is always readable on any background. |
| **TODO 2** | Sync the **color picker → hex text input**: listen to the `input` event on the color picker and keep the text field updated. Also refresh the card background and text color. |
| **TODO 3** | Sync the **hex text input → color picker**: listen to the `input` event on the text field, but only apply the change when the value is a valid 6-digit hex color (use the regex `/^#[0-9a-fA-F]{6}$/`). |
| **TODO 4** | Toggle the **locked state**: clicking the lock button should add/remove the `locked` CSS class on the card and update the button label to *"🔒 Locked"* or *"🔓 Lock"*. |
| **TODO 5** | **Copy to clipboard**: clicking the copy button should write the current hex value to the clipboard with `navigator.clipboard.writeText()`. Temporarily change the button text to *"✅ Copied!"* and restore it after 1.5 seconds. |

### Inside `renderPalette()` — fills the grid

| TODO | What to do |
|------|------------|
| **TODO 6** | Read the number input to find out how many cards the user wants (`parseInt`). |
| **TODO 7** | Loop that many times: generate a random hex color, create a card, and append it to the grid. |

---

## Concepts you will practice

- DOM manipulation (`createElement`, `appendChild`, `classList`)
- Event listeners (`addEventListener`, the `input` and `click` events)
- Working with the Clipboard API (`navigator.clipboard.writeText`)
- CSS class toggling for UI state (locked / copied)
- Basic color math (luminance — already implemented, just read it!)
- Template literals and arrow functions

---

## Tips

- Read the hint comment below each TODO before writing any code.
- The functions `generateRandomHex()` and `getTextColor()` are already implemented
  and ready to use — call them, don't rewrite them.
- Keep the browser DevTools console open to spot errors early.
- Complete the TODOs in order: TODO 1 gives you visible feedback immediately.
