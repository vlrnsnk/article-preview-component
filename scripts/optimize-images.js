import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const INPUT_DIR = 'src/assets/images';
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

const WEBP_OPTIONS = { quality: 85, effort: 6 };
const AVIF_OPTIONS = { quality: 65, effort: 6 };

async function getImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getImages(fullPath)));
    } else if (entry.isFile() && EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertImage(image) {
  try {
    const { dir, name } = path.parse(image);
    const webp = path.join(dir, `${name}.webp`);
    const avif = path.join(dir, `${name}.avif`);

    const [webpExists, avifExists] = await Promise.all([fileExists(webp), fileExists(avif)]);

    const tasks = [];

    if (!webpExists) tasks.push(sharp(image).rotate().webp(WEBP_OPTIONS).toFile(webp));
    if (!avifExists) tasks.push(sharp(image).rotate().avif(AVIF_OPTIONS).toFile(avif));

    if (tasks.length === 0) {
      console.log(`⏭  ${image}`);
      return;
    }

    await Promise.all(tasks);
    console.log(`✓  ${image}`);
  } catch (err) {
    console.error(`✗  ${image}: ${err.message}`);
  }
}

async function optimize() {
  const start = Date.now();
  const images = await getImages(INPUT_DIR);

  if (images.length === 0) {
    console.log('No images found.');
    return;
  }

  console.log(`Converting ${images.length} image(s)...\n`);
  await Promise.allSettled(images.map(convertImage));
  console.log(`\nDone in ${Date.now() - start}ms`);
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
