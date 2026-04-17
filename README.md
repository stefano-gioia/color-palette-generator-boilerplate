# 🎨 Color Palette Generator — Boilerplate

Un progetto di partenza per un esercizio introduttivo di JavaScript. L'interfaccia
grafica e i fogli di stile sono già completi — il tuo compito è aggiungere
l'interattività completando le sezioni TODO in `main.js`.

> 🚀 **Demo del risultato finale:** [color-palette-generator-solution.vercel.app](https://color-palette-generator-solution.vercel.app/)

---

## Prerequisiti

- [Node.js](https://nodejs.org/) v18 o superiore
- npm (incluso con Node.js)

---

## Come iniziare

### 1. Fai il fork del repository

Clicca il pulsante **Fork** in alto a destra su GitHub per creare una copia del
progetto sul tuo account personale. Lavorerai sempre sulla tua copia — in questo
modo il docente potrà vedere il tuo codice e, se vuoi, potrai aprire una
**Pull Request** per la revisione.

### 2. Clona il tuo fork in locale

```bash
git clone https://github.com/<tuo-username>/color-palette-generator-boilerplate.git
cd color-palette-generator-boilerplate
```

> ⚠️ Assicurati di clonare il **tuo fork** (URL con il tuo username),
> non il repository originale del docente.

### 3. Installa le dipendenze

```bash
npm install
```

### 4. Avvia il server di sviluppo

```bash
npm run dev
```

Apri l'URL mostrato nel terminale (di solito `http://localhost:5173`) per vedere l'app.

Altri script disponibili:

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il server di sviluppo Vite con hot reload |
| `npm run build` | Genera il bundle di produzione nella cartella `dist/` |
| `npm run preview` | Mostra in anteprima il build di produzione in locale |

---

## Struttura del progetto

```
color-palette-generator-boilerplate/
├── index.html   ← markup della pagina (non modificare)
├── style.css    ← foglio di stile completo (non modificare)
├── main.js      ← ⭐ il tuo file di lavoro
└── package.json
```

**Devi modificare solo `main.js`.**

---

## Cosa devi implementare

Apri `main.js` e cerca i sette commenti `// TODO`. Ognuno ha un suggerimento
proprio sotto. Ecco una panoramica di cosa ti chiede ciascun TODO:

### Dentro `createCard(hex)` — costruisce una card colore

| TODO | Cosa fare |
|------|-----------|
| **TODO 1** | Imposta il `backgroundColor` della card a `hex` e il `color` al risultato di `getTextColor(hex)`, così il testo è sempre leggibile su qualsiasi sfondo. |
| **TODO 2** | Sincronizza **color picker → campo hex**: ascolta l'evento `input` sul color picker e tieni aggiornato il campo di testo. Aggiorna anche il colore di sfondo e del testo della card. |
| **TODO 3** | Sincronizza **campo hex → color picker**: ascolta l'evento `input` sul campo di testo, ma applica la modifica solo se il valore è un colore hex valido a 6 cifre (usa la regex `/^#[0-9a-fA-F]{6}$/`). |
| **TODO 4** | Attiva/disattiva lo **stato bloccato**: il clic sul pulsante lock deve aggiungere/rimuovere la classe CSS `locked` sulla card e aggiornare l'etichetta del pulsante con *"🔒 Locked"* o *"🔓 Lock"*. |
| **TODO 5** | **Copia negli appunti**: il clic sul pulsante copy deve scrivere il valore hex corrente negli appunti con `navigator.clipboard.writeText()`. Cambia temporaneamente il testo del pulsante in *"✅ Copied!"* e ripristinalo dopo 1,5 secondi. |

### Dentro `renderPalette()` — riempie la griglia

| TODO | Cosa fare |
|------|-----------|
| **TODO 6** | Leggi il valore dell'input numerico per sapere quante card vuole l'utente (`parseInt`). |
| **TODO 7** | Esegui un ciclo quel numero di volte: genera un colore hex casuale, crea una card e aggiungila alla griglia. |

---

## Concetti che praticherai

- Manipolazione del DOM (`createElement`, `appendChild`, `classList`)
- Event listener (`addEventListener`, eventi `input` e `click`)
- Clipboard API (`navigator.clipboard.writeText`)
- Gestione dello stato UI tramite classi CSS (locked / copied)
- Basi di matematica del colore (luminanza — già implementata, leggila!)
- Template literal e funzioni classiche

---

## Consigli

- Leggi il commento suggerimento sotto ogni TODO prima di scrivere il codice.
- Le funzioni `generateRandomHex()` e `getTextColor()` sono già implementate
  e pronte all'uso — chiamale, non riscriverle.
- Tieni aperta la console degli Strumenti per sviluppatori del browser per intercettare subito gli errori.
- Completa i TODO in ordine: il TODO 1 ti dà un riscontro visivo immediato.

