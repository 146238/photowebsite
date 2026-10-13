const fs = require('fs');

const imgDir = './images';
const outputFile = './images.json';

if (fs.existsSync(imgDir)) {
  const files = fs.readdirSync(imgDir).filter(file => 
    /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(file)
  );
  
  const imagePaths = files.map(file => `images/${file}`);
  fs.writeFileSync(outputFile, JSON.stringify(imagePaths, null, 2));
  console.log(`Successfully indexed ${imagePaths.length} images.`);
} else {
  fs.writeFileSync(outputFile, JSON.stringify([]));
  console.log('No images directory found.');
}
