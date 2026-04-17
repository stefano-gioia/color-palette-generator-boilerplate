/**
 * Color Palette Generator — main.js
 *
 * COME È ORGANIZZATO QUESTO FILE:
 *  1. Riferimenti al DOM    — gli elementi con cui interagiamo (già scritto)
 *  2. generateRandomHex()   — utilità: genera una stringa colore hex casuale (già scritto)
 *  3. getTextColor(hex)     — utilità: sceglie il colore del testo leggibile (già scritto)
 *  4. createCard(hex)       — costruisce una card colore; contiene i TODO 1–5
 *  5. renderPalette()       — svuota la griglia e la riempie di card; contiene i TODO 6–7
 *  6. Event listener        — collega il bottone a renderPalette() (già scritto)
 *  7. Render iniziale       — chiama renderPalette() al caricamento della pagina (già scritto)
 *
 * IL TUO COMPITO: cerca ogni commento "TODO" e scrivi il codice descritto lì sotto.
 * NON modificare nulla al di fuori delle sezioni TODO, salvo diverse indicazioni.
 */

// ============================================================
// 1. RIFERIMENTI AL DOM
// ============================================================
const generateBtn = document.getElementById("generate-btn");
const colorCountInput = document.getElementById("color-count");
const paletteGrid = document.getElementById("palette-grid");

// ============================================================
// 2. UTILITÀ — generateRandomHex()
// ============================================================

/**
 * Restituisce una stringa colore hex casuale, es. "#a3f2c1".
 */
function generateRandomHex() {
  const randomInt = Math.floor(Math.random() * 0x1000000);
  return `#${randomInt.toString(16).padStart(6, "0")}`;
}

// ============================================================
// 3. UTILITÀ — getTextColor(hex)
// ============================================================

/**
 * Restituisce "#ffffff" o "#000000" in modo che il testo sia sempre
 * leggibile sul colore di sfondo fornito.
 *
 * Utilizza la formula standard della luminanza relativa (sRGB).
 * @param {string} hex - Una stringa colore hex come "#a3f2c1"
 * @returns {string} "#ffffff" oppure "#000000"
 */
function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  function toLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  const luminance =
    0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  return luminance > 0.179 ? "#000000" : "#ffffff";
}

// ============================================================
// 4. createCard(hex)
// ============================================================

/**
 * Crea un elemento card colore per il valore hex fornito e lo restituisce.
 * @param {string} hex - Una stringa colore hex come "#a3f2c1"
 * @returns {HTMLElement} Il div .card completamente assemblato
 */
function createCard(hex) {
  // --- Contenitore della card ---
  const card = document.createElement("div");
  card.classList.add("card");

  // --- Area campione colore (metà superiore della card) ---
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

  // --- Pulsanti azione ---
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

  // --- Assemblaggio della card ---
  card.appendChild(swatch);
  card.appendChild(cardActions);

  // TODO 1: Imposta il colore di sfondo e il colore del testo della card.
  // Suggerimento: assegna card.style.backgroundColor a hex, e card.style.color
  // al risultato di getTextColor(hex) così il testo è sempre leggibile.

  // TODO 2: Sincronizza il color picker → campo di testo hex.
  // Suggerimento: ascolta l'evento 'input' su colorPicker; quando scatta,
  // aggiorna hexInput.value con colorPicker.value, poi aggiorna anche
  // il colore di sfondo e del testo della card come hai fatto nel TODO 1.

  // TODO 3: Sincronizza il campo di testo hex → color picker.
  // Suggerimento: ascolta l'evento 'input' su hexInput; quando scatta,
  // verifica che hexInput.value corrisponda a /^#[0-9a-fA-F]{6}$/ prima
  // di fare qualsiasi cosa — solo se corrisponde, aggiorna colorPicker.value,
  // card.style.backgroundColor e card.style.color.

  // TODO 4: Attiva/disattiva lo stato bloccato al clic del pulsante lock.
  // Suggerimento: ascolta l'evento 'click' su lockBtn; usa card.classList.toggle('locked')
  // per aggiungere/rimuovere la classe, poi aggiorna lockBtn.textContent con
  // "🔒 Locked" o "🔓 Lock" in base al valore di card.classList.contains('locked').

  // TODO 5: Copia il valore hex negli appunti al clic del pulsante copy.
  // Suggerimento: ascolta l'evento 'click' su copyBtn con una funzione async:
  //   copyBtn.addEventListener('click', async function() { ... })
  // All'interno, usa "await" davanti a navigator.clipboard.writeText(hexInput.value)
  // per attendere che la copia sia completata prima di continuare:
  //   await navigator.clipboard.writeText(hexInput.value);
  // Poi imposta copyBtn.textContent a "✅ Copied!" e aggiungi la classe 'copied',
  // infine usa setTimeout(..., 1500) per ripristinare il testo originale
  // "📋 Copy" e rimuovere la classe 'copied' dopo 1,5 secondi.
  //
  // Nota: "async/await" è un modo più leggibile di lavorare con le Promise.
  // "await" mette in pausa l'esecuzione della funzione finché la Promise non
  // si risolve, evitando di dover concatenare .then() e .catch().

  return card;
}

// ============================================================
// 5. renderPalette()
// ============================================================

/**
 * Svuota la griglia della palette e la riempie con nuove card colore.
 */
function renderPalette() {
  paletteGrid.innerHTML = "";

  // TODO 6: Leggi quante card vuole l'utente.
  // Suggerimento: usa parseInt(colorCountInput.value, 10) e memorizza il risultato
  // in una variabile chiamata count.

  // TODO 7: Genera `count` card colore e aggiungile alla griglia.
  // Suggerimento: usa un ciclo for che esegue `count` iterazioni; ad ogni iterazione,
  // chiama generateRandomHex() per ottenere un colore casuale, poi chiama
  // createCard(hex) per creare l'elemento card e infine
  // paletteGrid.appendChild(card) per aggiungerlo alla griglia.
}

// ============================================================
// 6. EVENT LISTENER
// ============================================================
generateBtn.addEventListener("click", renderPalette);

// ============================================================
// 7. RENDER INIZIALE
// ============================================================
renderPalette();
