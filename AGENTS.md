# Repository Guidelines

## Project Structure & Module Organization
- `index.html` contains the full single-page portfolio markup: sticky navigation, hero, about, dev environment, projects carousel, contact section, and footer.
- `styles.css` holds the main theme tokens in `:root`, global layout, responsive rules, animations, and section-specific styling.
- `card.css` defines the shared `.card` surface used by card-like blocks.
- `script.js` contains all client-side behavior: hero canvas rendering, project carousel controls, and mobile navigation toggling.
- `assets/` stores local images and icons used by the page (`photo.png`, `binder-logo.jpg`, `signet.ico`).
- `README.md` documents the site at a high level; keep it aligned with major structural changes.

## Build, Test, and Development Commands
This is a static GitHub Pages site with no build step and no package manager.
- Preferred local server: `python -m http.server 8000`
- Then open: `http://localhost:8000`
- Directly opening `index.html` also works for quick checks, but a local server is better for validating asset loading and browser behavior.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML, CSS, and JavaScript.
- Keep files ASCII-only unless a file already contains non-ASCII text and there is a clear reason to preserve it.
- CSS follows BEM-style naming for components and modifiers such as `.navbar__toggle` and `.project-card--active`.
- Reuse tokens from `:root` in `styles.css` instead of hardcoding duplicate colors or shared visual values.
- Keep JavaScript procedural. Prefer small focused functions and platform APIs only; do not introduce frameworks or external libraries.
- Reuse the shared `.card` styling in `card.css` for new card surfaces before adding one-off panel styles.
- If you add or change external image hosts such as `skillicons.dev`, update the Content Security Policy in `index.html` to match.

## Testing Guidelines
- No automated tests are configured for this repository.
- Manual verification should include:
  - load the page and confirm all sections render correctly,
  - verify sticky navigation and mobile menu behavior below `720px`,
  - verify the projects carousel arrows change the active card and update the status text,
  - confirm the hero canvas resizes cleanly and animates smoothly,
  - confirm reduced motion behavior by testing `prefers-reduced-motion`,
  - verify local assets and external icons load correctly.

## Accessibility & Content Notes
- Preserve the hero canvas fallback text and hidden topic list for non-visual access.
- Keep semantic buttons, labels, and ARIA attributes intact when editing navigation or carousel controls.
- Use meaningful `alt` text for local images and icons that convey content.
- When changing copy, keep metadata in `index.html` aligned where relevant: page title, description, Open Graph tags, Twitter tags, and canonical URL.

## Commit & Pull Request Guidelines
- This repository has Git history; use clear imperative commit messages that describe the change, for example `Refine projects carousel copy` or `Adjust mobile navigation spacing`.
- PRs should include:
  - a concise summary of the user-visible change,
  - before/after screenshots for layout or styling updates,
  - notes about any accessibility, CSP, or external asset changes,
  - manual verification steps performed.

## Configuration Tips
- Theme colors and shared visual tokens live in `styles.css` under `:root`.
- The hero canvas sizing depends on `.hero__right`; if the animation layout changes, verify both CSS dimensions and `script.js` resize logic.
- Deployment targets GitHub Pages from this repository; keep the site fully static and relative-path friendly.
