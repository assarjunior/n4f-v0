import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const images = [
  {
    name: "Homepage Hero",
    source: "public/hero.png",
    output: "public/hero-optimized.webp",
    maxWidth: 2560,
    quality: 82,
    alphaQuality: 95,
  },
  {
    name: "Torn Paper Button",
    source: "public/UI/Torn Paper_05 copy.webp",
    output: "public/UI/torn-paper-optimized.webp",
    maxWidth: 780,
    quality: 84,
    alphaQuality: 95,
  },
];

function formatSize(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

for (const image of images) {
  const sourcePath = path.join(root, image.source);
  const outputPath = path.join(root, image.output);

  const original = await sharp(sourcePath).metadata();
  const originalStats = await stat(sourcePath);

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: image.maxWidth,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      alphaQuality: image.alphaQuality,
      effort: 6,
      lossless: false,
    })
    .toFile(outputPath);

  const optimized = await sharp(outputPath).metadata();
  const optimizedStats = await stat(outputPath);

  if (original.hasAlpha && !optimized.hasAlpha) {
    throw new Error(`${image.name}: transparency was unexpectedly lost.`);
  }

  const reduction = (1 - optimizedStats.size / originalStats.size) * 100;

  console.log(`\n${image.name}`);
  console.log(
    `Dimensions: ${original.width}x${original.height}` +
      ` → ${optimized.width}x${optimized.height}`,
  );
  console.log(
    `File size: ${formatSize(originalStats.size)}` +
      ` → ${formatSize(optimizedStats.size)}`,
  );
  console.log(`Reduction: ${reduction.toFixed(1)}%`);
  console.log(`Transparency: ${optimized.hasAlpha}`);
  console.log(`Output: ${image.output}`);
}
