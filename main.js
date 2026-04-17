/**
 * Color Palette Generator — main.js
 *
 * HOW THIS FILE IS ORGANIZED:
 *  1. DOM references        — elements we interact with (already written)
 *  2. generateRandomHex()   — utility: random hex color string (already written)
 *  3. getTextColor(hex)     — utility: pick readable text color (already written)
 *  4. createCard(hex)       — builds one color card; contains TODOs 1–5
 *  5. renderPalette()       — clears the grid and fills it with cards; contains TODOs 6–7
 *  6. Event listener        — wires the button to renderPalette() (already written)
 *  7. Initial render        — calls renderPalette() on page load (already written)
 *
 * YOUR TASKS: look for every "TODO" comment and write the code described there.
 * Do NOT change anything outside the TODO sections unless instructed.
 */

// ============================================================
// 1. DOM REFERENCES
// ============================================================
const generateBtn = document.getElementById("generate-btn");
const colorCountInput = document.getElementById("color-count");
const paletteGrid = document.getElementById("palette-grid");

// ============================================================
// 2. UTILITY — generateRandomHex()
// ============================================================

/**
 * Returns a random hex color string, e.g. "#a3f2c1".
 */
const generateRandomHex = () => {
  const randomInt = Math.floor(Math.random() * 0x1000000);
  return `#${randomInt.toString(16).padStart(6, "0")}`;
};

// ============================================================
// 3. UTILITY — getTextColor(hex)
// ============================================================

/**
 * Returns "#ffffff" or "#000000" so that text is always readable
 * on top of the given background color.
 *
 * Uses the standard relative luminance formula (sRGB).
 * @param {string} hex - A hex color string like "#a3f2c1"
 * @returns {string} "#ffffff" or "#000000"
 */
const getTextColor = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const toLinear = (c) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  const luminance =
    0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  return luminance > 0.179 ? "#000000" : "#ffffff";
};

// ============================================================
// 4. createCard(hex)
// ============================================================

/**
 * Creates a color card element for the given hex color and returns it.
 * @param {string} hex - A hex color string like "#a3f2c1"
 * @returns {HTMLElement} The fully assembled .card div
 */
const createCard = (hex) => {
  // --- Card container ---
  const card = document.createElement("div");
  card.classList.add("card");

  // --- Color swatch area (top half of card) ---
  const swatch = document.createElement("div");
  swatch.classList.add("color-swatch");

  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.value = hex;

  const hexInput = document.createElement("input");
  hexInput.type = "text";
  hexInput.classList.add("hex-input");
  hexInput.value = hex;
  hexInput.maxLength = 7;

  swatch.appendChild(colorPicker);
  swatch.appendChild(hexInput);

  // --- Action buttons ---
  const cardActions = document.createElement("div");
  cardActions.classList.add("card-actions");

  const lockBtn = document.createElement("button");
  lockBtn.classList.add("lock-btn");
  lockBtn.textContent = "🔓 Lock";

  const copyBtn = document.createElement("button");
  copyBtn.classList.add("copy-btn");
  copyBtn.textContent = "📋 Copy";

  cardActions.appendChild(lockBtn);
  cardActions.appendChild(copyBtn);

  // --- Assemble card ---
  card.appendChild(swatch);
  card.appendChild(cardActions);

  // TODO 1: Set the card's background color and text color.
  // Hint: set card.style.backgroundColor to hex, and card.style.color
  // to getTextColor(hex) so text is always readable on the card.

  // TODO 2: Sync the color picker → hex text input.
  // Hint: listen to the 'input' event on colorPicker; when it fires,
  // update hexInput.value with colorPicker.value, then also update the
  // card background and text color just like you did in TODO 1.

  // TODO 3: Sync the hex text input → color picker.
  // Hint: listen to the 'input' event on hexInput; when it fires,
  // check whether hexInput.value matches /^#[0-9a-fA-F]{6}$/ before
  // doing anything — only if it matches, update colorPicker.value,
  // card.style.backgroundColor, and card.style.color.

  // TODO 4: Toggle the locked state when the lock button is clicked.
  // Hint: listen to the 'click' event on lockBtn; toggle the 'locked'
  // class on card with card.classList.toggle('locked'), then update
  // lockBtn.textContent to "🔒 Locked" or "🔓 Lock" depending on
  // whether card.classList.contains('locked') is true or false.

  // TODO 5: Copy the hex value to the clipboard when the copy button is clicked.
  // Hint: listen to the 'click' event on copyBtn; call
  // navigator.clipboard.writeText(hexInput.value) — it returns a Promise,
  // so use .then() to run code after it succeeds: temporarily set
  // copyBtn.textContent to "✅ Copied!" and add the 'copied' class,
  // then use setTimeout(..., 1500) to restore the original text
  // "📋 Copy" and remove the 'copied' class after 1.5 seconds.

  return card;
};

// ============================================================
// 5. renderPalette()
// ============================================================

/**
 * Clears the palette grid and fills it with freshly generated color cards.
 */
const renderPalette = () => {
  paletteGrid.innerHTML = "";

  // TODO 6: Read how many cards the user wants.
  // Hint: use parseInt(colorCountInput.value, 10) and store the result
  // in a variable called count.

  // TODO 7: Generate `count` color cards and add them to the grid.
  // Hint: use a for loop that runs `count` times; on each iteration,
  // call generateRandomHex() to get a random color, then call
  // createCard(hex) to create the card element, and finally
  // paletteGrid.appendChild(card) to add it to the grid.
};

// ============================================================
// 6. EVENT LISTENER
// ============================================================
generateBtn.addEventListener("click", renderPalette);

// ============================================================
// 7. INITIAL RENDER
// ============================================================
renderPalette();
