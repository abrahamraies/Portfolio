// Builds the app and replaces the contents of docs/ (GitHub Pages) with the fresh output.
// Usage: npm run deploy            -> build + update docs/
//        node scripts/deploy-docs.mjs --out <dir> [--skip-build]   (used for testing)
import { execSync } from 'node:child_process';
import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const target = resolve(root, outIndex >= 0 ? args[outIndex + 1] : 'docs');
const source = join(root, 'dist', 'front-end', 'browser');
const keep = new Set(['CNAME', '.nojekyll']); // files GitHub Pages needs that the build does not produce

if (!args.includes('--skip-build')) {
  console.log('> Building (production)...');
  rmSync(join(root, 'dist'), { recursive: true, force: true });
  execSync('npx ng build', { cwd: root, stdio: 'inherit' });
}

if (!existsSync(join(source, 'index.html'))) {
  console.error(`Build output not found at ${source}. Aborting; ${target} was not touched.`);
  process.exit(1);
}

mkdirSync(target, { recursive: true });
for (const entry of readdirSync(target)) {
  if (!keep.has(entry)) rmSync(join(target, entry), { recursive: true, force: true });
}
cpSync(source, target, { recursive: true });
// GitHub Pages serves 404.html for unknown paths; reusing index.html lets Angular handle deep links like /Portfolio/certificates/udemy.
copyFileSync(join(target, 'index.html'), join(target, '404.html'));

console.log(`> Copied ${source} -> ${target}`);
console.log('> Review with `git status`, then commit and push to main to publish.');
