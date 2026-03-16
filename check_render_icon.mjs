import * as si from 'react-icons/si';

try {
  console.log('SiVercel exists:', !!si.SiVercel);
  console.log('SiRender exists:', !!si.SiRender);
  if (si.SiRender) {
    console.log('SiRender is available!');
  } else {
    console.log('SiRender is NOT available in exports.');
    // List all that start with SiRender or contain Render
    const keys = Object.keys(si);
    console.log('Filtered:', keys.filter(k => k.toLowerCase().includes('render')));
  }
} catch (e) {
  console.error('Error:', e.message);
}
