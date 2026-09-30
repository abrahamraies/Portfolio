// Converts every .jpg/.jpeg/.png under src/assets/img to WebP at the size the site actually needs,
// then deletes the original. Safe to re-run: only raster files that are not WebP yet are touched.
// Usage: npm run images          (after dropping new images into src/assets/img/...)
// After converting, update the image references in the code from .png/.jpg to .webp.
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = join(root, 'src', 'assets', 'img');

// Kept as JPEG on purpose: social networks (LinkedIn, WhatsApp) read og:image more reliably as JPEG.
const skip = new Set(['og.jpg']);

// Max width in px and WebP quality, by folder (default) or by exact file name.
const byFolder = { proyects: [720, 78], certificados: [1000, 80] };
const byFile = {
  'fondo.jpg': [1920, 68],
  'aboutMe.jpg': [840, 78],
  'Perfil.png': [240, 82],
  'WhatsApp logo.png': [96, 85],
};
const fallback = [960, 80];
// Extra smaller variant for phones (name-mobile.webp): only the hero background needs it.
const mobileVariants = { 'fondo.jpg': [900, 66] };

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const kb = (n) => `${Math.round(n / 1024)} KB`;
let before = 0;
let after = 0;

for (const file of walk(imgDir)) {
  const name = basename(file);
  if (!/\.(jpe?g|png)$/i.test(name) || skip.has(name)) continue;

  const folder = basename(dirname(file));
  const [width, quality] = byFile[name] ?? byFolder[folder] ?? fallback;
  const target = join(dirname(file), name.replace(extname(name), '.webp'));

  const originalSize = statSync(file).size;
  const info = await sharp(file)
    .rotate() // respect EXIF orientation
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(target);

  let extra = 0;
  if (mobileVariants[name]) {
    const [mw, mq] = mobileVariants[name];
    const mobileTarget = join(dirname(file), name.replace(extname(name), '-mobile.webp'));
    extra = (await sharp(file).rotate().resize({ width: mw, withoutEnlargement: true }).webp({ quality: mq, effort: 6 }).toFile(mobileTarget)).size;
  }

  unlinkSync(file);
  before += originalSize;
  after += info.size + extra;
  console.log(`${name.padEnd(46)} ${kb(originalSize).padStart(8)} -> ${kb(info.size).padStart(7)}  (${info.width}x${info.height})${extra ? ` + mobile ${kb(extra)}` : ''}`);
}

console.log(`\nTotal: ${kb(before)} -> ${kb(after)}`);
