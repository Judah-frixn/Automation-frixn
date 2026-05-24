import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = process.cwd();
const bakPath = path.join(root, 'index.html.bak');
const htmlPath = path.join(root, 'index.html');
const distPath = path.join(root, 'dist');
const distHtmlPath = path.join(distPath, 'index.html');
const distAssetsDir = path.join(distPath, 'assets');
const rootAssetsDir = path.join(root, 'assets');

try {
  console.log('1. Preparing source index.html...');
  if (fs.existsSync(bakPath)) {
    fs.copyFileSync(bakPath, htmlPath);
    console.log('   Restored index.html from index.html.bak.');
  } else {
    console.warn('   index.html.bak not found, using existing index.html.');
  }

  console.log('2. Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('3. Copying compiled index.html to root...');
  if (fs.existsSync(distHtmlPath)) {
    fs.copyFileSync(distHtmlPath, htmlPath);
    console.log('   Copied dist/index.html to root index.html.');
  } else {
    throw new Error('dist/index.html was not generated!');
  }

  console.log('4. Synchronizing assets directory at root...');
  if (!fs.existsSync(rootAssetsDir)) {
    fs.mkdirSync(rootAssetsDir, { recursive: true });
    console.log('   Created root assets/ directory.');
  }

  if (fs.existsSync(distAssetsDir)) {
    const files = fs.readdirSync(distAssetsDir);
    for (const file of files) {
      const srcFile = path.join(distAssetsDir, file);
      const destFile = path.join(rootAssetsDir, file);
      fs.copyFileSync(srcFile, destFile);
      console.log(`   Copied: ${file}`);
    }
  } else {
    console.warn('   dist/assets/ directory not found.');
  }

  console.log('Build and asset synchronization completed successfully!');
} catch (error) {
  console.error('Build script failed:', error);
  process.exit(1);
}
