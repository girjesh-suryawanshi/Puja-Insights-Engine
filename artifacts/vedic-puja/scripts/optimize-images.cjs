const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * This script identifies large PNG images and provides instructions/commands 
 * to convert them to WebP using 'ffmpeg' or 'magick' (ImageMagick) if available.
 * 
 * If you have Node.js and 'sharp' installed, it can do it directly.
 * Since 'sharp' might not be installed, this script lists the commands you can run.
 */

const publicImagesDir = path.join(__dirname, '../public/images');
const imagesToOptimize = [
  'hero-bg.png',
  'pandit-1.png',
  'pandit-2.png',
  'puja-items.png'
];

console.log('--- Image Optimization Assistant ---');

imagesToOptimize.forEach(filename => {
  const filePath = path.join(publicImagesDir, filename);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    const webpFilename = filename.replace('.png', '.webp');
    
    console.log(`\nFound: ${filename} (${sizeInMB} MB)`);
    console.log(`Target: ${webpFilename}`);
    
    // Provide commands for common CLI tools
    console.log(`  Suggested Conversion Command:`);
    console.log(`  > ffmpeg -i public/images/${filename} -webp_lossless 0 -q:v 80 public/images/${webpFilename}`);
    console.log(`  OR using ImageMagick:`);
    console.log(`  > magick public/images/${filename} public/images/${webpFilename}`);
  }
});

console.log('\n--- Next Steps ---');
console.log('1. Run one of the commands above for each image.');
console.log('2. Update Home.tsx and index.html to use the .webp extension.');
console.log('3. Delete the old .png files to save space in your repository.');
