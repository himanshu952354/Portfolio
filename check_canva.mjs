import * as si from 'react-icons/si';

try {
  console.log('SiCanva exists:', !!si.SiCanva);
  if (si.SiCanva) {
    console.log('SiCanva is available!');
  } else {
    console.log('SiCanva is NOT available in exports.');
    const keys = Object.keys(si);
    console.log('Filtered icons with canva:', keys.filter(k => k.toLowerCase().includes('canva')));
  }
} catch (e) {
  console.error('Error:', e.message);
}
