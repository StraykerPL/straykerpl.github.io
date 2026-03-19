# Daniel "Strayker" Nowak Personal Site

Static portfolio site published with GitHub Pages. The project is plain HTML, CSS, and JavaScript with no build step, no framework, and no package manager.

## How The Site Works

### HTML

`index.html` is a single-page layout with main sections, only containing data.

### CSS

Styling is split into:

- `styles.css` for global theme variables, layout, responsive behavior, animations, and section-specific rules,
- `card.css` for the reusable `.card` surface.

Theme colors are centralized in `:root`. Layout is mostly driven by CSS Grid and flexbox. Motion is reduced automatically when the user has `prefers-reduced-motion: reduce` enabled.

### JavaScript

`script.js` uses procedural DOM and Canvas APIs only.

Key functions:

- `setup()` sizes the hero canvas, initializes scene data, and starts rendering.
- `draw()` renders the animated orbital scene and topic labels.
- `setupProjectsCarousel()` switches visible project cards and updates the status text.
- `setupMobileNavigation()` toggles the navigation menu on smaller screens.

The animation listens for:

- window resize events, to rebuild canvas metrics,
- reduced-motion preference changes, to stop or resume animation.

## Local Development

There is no build step. Open the `index.html` file directly in browser or with a simple static server to debug it in production-like environment locally.

## Editing Guidelines

- Use 2-space indentation in HTML, CSS, and JavaScript.
- Keep JavaScript procedural and avoid adding libraries unless the project direction changes.
- Reuse `:root` variables in `styles.css` for colors and shared visual tokens.
- If you add new card-like UI blocks, prefer reusing the `.card` styling from `card.css`.
- If you change external icon sources from `skillicons.dev`, update the CSP in `index.html` if needed.

## Accessibility Notes

- The hero canvas includes fallback text and a hidden topic list for non-visual access.
- Reduced motion is respected in both CSS and JavaScript.
- Navigation and carousel controls use semantic buttons and ARIA attributes.

### Deployment Workflow

GitHub Pages listens on `master` branch changes, then takes last commit and deploys it on web server.
Follow Git Flow branching rules for creating new changes.
