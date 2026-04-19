# Worldwide Mobile Car Detailing Site

This app is configured to deploy to GitHub Pages from the repository root workflow at `.github/workflows/deploy.yml`.

## Local Development

```bash
npm install
npm run dev
```

## Build

Standard build:

```bash
npm run build
```

GitHub Pages build (includes SPA fallback):

```bash
npm run build:pages
```

`build:pages` creates `dist/404.html` from `dist/index.html` so deep links (for example `/about`) still load on GitHub Pages.

## GitHub Pages Deployment

1. Push to the `main` branch.
2. In GitHub, go to `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. The `Deploy to GitHub Pages` workflow will build from `premium-site` and publish `premium-site/dist`.

## Base Path

Vite is configured with:

```js
base: '/worldwidemobilecardetailing/'
```

If the repository name changes, update `premium-site/vite.config.js` to match the new repository path.
