import fs from 'fs';
import path from 'path';

const root = process.cwd();
const bakPath = path.join(root, 'index.html.bak');
const htmlPath = path.join(root, 'index.html');

if (fs.existsSync(bakPath)) {
  fs.copyFileSync(bakPath, htmlPath);
  console.log('Successfully restored index.html for development.');
} else {
  console.log('index.html.bak does not exist, keeping current index.html.');
}
