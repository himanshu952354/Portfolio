import fs from 'fs';
import path from 'path';

const reactIconsPath = 'c:\\Users\\shekh\\OneDrive\Desktop\\new_new_portfolio\\node_modules\\react-icons';

async function searchIcons() {
  const dirs = fs.readdirSync(reactIconsPath).filter(d => fs.statSync(path.join(reactIconsPath, d)).isDirectory() && d !== 'lib');
  const results = {};

  for (const dir of dirs) {
    try {
      const module = await import(`react-icons/${dir}`);
      const keys = Object.keys(module);
      const matched = keys.filter(k => k.toLowerCase().includes('render'));
      if (matched.length > 0) {
        results[dir] = matched;
      }
    } catch (e) {
      // ignore
    }
  }
  console.log('Icons found with "render":', JSON.stringify(results, null, 2));
}

searchIcons();
