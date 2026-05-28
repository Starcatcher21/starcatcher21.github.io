const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Base images folder containing /emotes and /photos
const IMAGE_DIR = path.join(__dirname, 'src/images'); 
const OUTPUT_FILE = path.join(__dirname, 'src/imageRegistry.js');

function scanAndGenerate() {
  if (!fs.existsSync(IMAGE_DIR)) return;

  // Read subfolders inside the main directory
  const subfolders = fs.readdirSync(IMAGE_DIR).filter(file => {
    return fs.statSync(path.join(IMAGE_DIR, file)).isDirectory();
  });

  let importStatements = '';
  let registryObjectStr = 'export const imageRegistry = {\n';
  let imgCounter = 0;

  subfolders.forEach((folder) => {
    const folderPath = path.join(IMAGE_DIR, folder);
    const files = fs.readdirSync(folderPath).filter(file => /\.(png|jpe?g|svg|webp|gif)$/i.test(file));

    registryObjectStr += `  '${folder}': {\n`;

    files.forEach((file) => {
      const variableName = `img_${folder}_${imgCounter++}`;
      // Generate clean imports pointing to the subfolders
      importStatements += `import ${variableName} from './images/${folder}/${file}';\n`;
      registryObjectStr += `    '${file}': ${variableName},\n`;
    });

    registryObjectStr += `  },\n`;
  });

  registryObjectStr += '};\n';

  const fileContent = `${importStatements}\n${registryObjectStr}`;

  fs.writeFileSync(OUTPUT_FILE, fileContent);
  console.log('🔄 Image registry updated with subfolders!');
}

// Watcher logic
if (process.argv.includes('--watch')) {
  console.log('👀 Watching images and subfolders for changes...');
  chokidar.watch(IMAGE_DIR).on('all', () => {
    scanAndGenerate();
  });
} else {
  scanAndGenerate();
}
