# Portfolio

Personal portfolio built with Angular 18 (NgModule-based), Bootstrap 5, jQuery/Popper, and EmailJS for the contact form.

## Commands
- Requires Node `^20.19`, `^22.12` or `>=24` (Angular 21). Dependencies must stay at 0 vulnerabilities: run `npm audit` after any dependency change.
- `npm start` — dev server at http://localhost:4200/Portfolio/ (must be served under `/Portfolio/` to match `<base href>`)
- `npm run build` — production build to `dist/front-end`
- `npm run deploy` — builds and replaces the contents of `docs/` (GitHub Pages) with the fresh output (plus a `404.html` copy of `index.html` so deep links work); then review with `git status` and commit/push to `main`. Run `node scripts/deploy-docs.mjs --out <dir>` to try it against another folder.
- `npm test` — Karma/Jasmine (watch mode, opens Chrome). For CI/headless: `npx ng test --watch=false --browsers=ChromeHeadlessNoSandbox`
  In cloud sessions set `CHROME_BIN=/opt/pw-browsers/chromium-1194/chrome-linux/chrome` first.
- Typecheck only: `npx tsc --noEmit -p tsconfig.app.json`

## Layout
- `src/app/components/*` — one folder per section (about, contact, home, certificados, ...). Certificates are split into `Google/`, `Udemy/` and `Others/` sub-components.
- `src/app/app.module.ts` / `app-routing.module.ts` — declare and route new components here.
- Static images referenced by the source live in `src/assets`.

## Deployment / generated files
- `docs/` is the published GitHub Pages output (hashed bundles, vendored assets). Do not hand-edit it; regenerate it with `npm run deploy`.
- `package-lock.json` is generated; change it only via npm.
- A PreToolUse hook blocks edits to `docs/`, `dist/` and `package-lock.json`.

## Conventions
- Follow `.editorconfig`. No ESLint/Prettier is configured.
- Each component ships `.ts/.html/.css/.spec.ts`; keep that structure when adding one (`npx ng generate component ...`).

## Git
- Commits are authored as the repo owner (`abrahamraies <abrahamraies@gmail.com>`). Never add `Co-Authored-By` or other Claude attribution lines to commits or PRs.
- Branch names are in Spanish and must not contain "claude" (e.g. `arreglar-pruebas`, `agregar-certificado`).

## Skills
- `.claude/skills/frontend-design` (from anthropics/claude-code) and `.claude/skills/design-review` (from jezweb/claude-skills, adapted) are vendored for UI/UX work. Use `design-review` to audit pages before and after changes.
