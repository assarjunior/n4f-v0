import sharp from "sharp";
import { stat } from "node:fs/promises";

const posters = [
  {
    name: "1+1",
    input: "public/posters/1+1-poster.png",
    output: "public/posters/1+1-poster-optimized.jpg",
  },
  {
    name: "Meen Yesdak",
    input: "public/posters/meen-yesdak-poster.png",
    output: "public/posters/meen-yesdak-poster-optimized.jpg",
  },
];

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

for (const poster of posters) {
  const original = await sharp(poster.input).metadata();
  const statistics = await sharp(poster.input).stats();

  // JPEG cannot preserve transparency.
  // Reject transparent artwork rather than
  // silently altering its appearance.
  if (!statistics.isOpaque) {
    throw new Error(
      `${poster.name}: source contains transparent pixels. Review before converting.`,
    );
  }

  const output = await sharp(poster.input)
    .rotate()
    .jpeg({
      quality: 86,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(poster.output);

  const originalSize = (await stat(poster.input)).size;

  const reduction = (1 - output.size / originalSize) * 100;

  console.log(`\n${poster.name}`);
  console.log(`Original: ${kb(originalSize)}`);
  console.log(`Optimized: ${kb(output.size)}`);
  console.log(`Reduction: ${reduction.toFixed(1)}%`);
  console.log(`Dimensions: ${original.width} × ${original.height}`);
  console.log(`Saved: ${poster.output}`);
}
