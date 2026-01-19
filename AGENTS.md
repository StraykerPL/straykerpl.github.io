# Repository Guidelines

## Project Structure & Module Organization
- `index.html` holds the single-page markup for the hero section.
- `styles.css` contains all site styling (BEM class names).
- `script.js` drives the canvas animation for the right column.

## Build, Test, and Development Commands
This is a static site with no build step.
- Run locally with a static server:
  - `python -m http.server 8000` then open `http://localhost:8000`.
- Direct file open also works (`index.html`), but a server is preferred for consistent asset loading.

## Coding Style & Naming Conventions
- Indentation: 2 spaces in HTML, CSS, and JS.
- Naming: BEM for CSS classes (e.g., `.hero__title`, `.hero__cta--ghost`).
- JavaScript: procedural style, no classes; keep functions small and focused.
- Keep code ASCII-only; avoid non-ASCII punctuation in text.
- No external libraries; use platform APIs only (HTML5/CSS3/Canvas).
- Accessibility: provide text alternatives for canvas content and honor `prefers-reduced-motion`.

## Testing Guidelines
- No automated tests are defined for this repository.
- Manual verification: load the page, confirm layout alignment, and watch the canvas animation for smooth motion and readability.

## Commit & Pull Request Guidelines
- No git history is present in this folder; no commit message convention can be inferred.
- Use clear, imperative commit messages (e.g., `Update hero copy`, `Tweak canvas colors`).
- PRs should include: summary of changes, before/after screenshot, and any design references used.

## Configuration Tips
- Keep colors and typography centralized in `styles.css` under `:root` variables.
- Canvas sizing relies on the right column dimensions; adjust the `.hero__right` min-height if needed.
- Security headers are represented as meta tags in `index.html`; mirror them as real headers at the host when possible.
