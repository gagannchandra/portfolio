const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const inputImage = path.join(__dirname, 'public/fox-logo-circle.png');
  
  if (!fs.existsSync(inputImage)) {
    console.error(`Input image not found: ${inputImage}`);
    return;
  }

  // Generate app/icon.png (512x512)
  await sharp(inputImage)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(__dirname, 'app/icon.png'));
  console.log('Generated app/icon.png');

  // Generate app/apple-icon.png (180x180)
  await sharp(inputImage)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(__dirname, 'app/apple-icon.png'));
  console.log('Generated app/apple-icon.png');

  // Generate app/favicon.ico (we'll just do a 32x32 png and rename for Next.js, or better, 48x48)
  // According to Next.js docs, a single .ico or .png works. Let's make a 48x48 png for favicon.ico.
  // Actually, sharp can't output true .ico. Next.js can handle an `icon.png` in `app/` and we can just delete `favicon.ico`. 
  // Wait, Next.js supports `favicon.ico`. Let's use `app/icon.png` and let Next handle the rest, or generate multiple sizes.
  // Wait, the prompt specifically asks for `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`.
  
  await sharp(inputImage)
    .resize(16, 16, { fit: 'contain' })
    .toFile(path.join(__dirname, 'public/favicon-16x16.png'));
  console.log('Generated public/favicon-16x16.png');

  await sharp(inputImage)
    .resize(32, 32, { fit: 'contain' })
    .toFile(path.join(__dirname, 'public/favicon-32x32.png'));
  console.log('Generated public/favicon-32x32.png');
  
  // Create a pseudo .ico which is just a 48x48 PNG renamed if sharp can't do .ico
  // Or we can just use `favicon-32x32.png` and `favicon-16x16.png` and configure them in layout.tsx.
}

generateIcons().catch(console.error);
