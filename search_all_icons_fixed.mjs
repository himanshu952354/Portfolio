import fs from 'fs';
import path from 'path';

const reactIconsPath = 'c:\\Users\\shekh\\OneDrive\\Desktop\\new_new_portfolio\\node_modules\\react-icons';

async function searchIcons() {
  const dirs = fs.readdirSync(reactIconsPath).filter(d => fs.statSync(path.join(reactIconsPath, d)).isDirectory() && d !== 'lib' && d !== '_lib');
  const results = {};

  for (const dir of dirs) {
    try {
      // Dynamic import might fail if not fully supported or paths are weird
      // Let's just read index.d.ts if it exists to find exports
      const dtsPath = path.join(reactIconsPath, dir, 'index.d.ts');
      if (fs.existsSync(dtsPath)) {
        const content = fs.readFileSync(dtsPath, 'utf-8');
        const matches = content.match(/Si\w*Render\w*/g) || [];
        if (matches.length > 0) {
          results[dir] = matches;
        }
      }
    } catch (e) {
      // ignore
    }
  }
  console.log('Icons found with "Render":', JSON.stringify(results, null, 2));
}

searchIcons();
