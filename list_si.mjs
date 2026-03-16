import * as si from 'react-icons/si';
const keys = Object.keys(si);
console.log('Total icons:', keys.length);
console.log('Vercel icons:', keys.filter(k => k.toLowerCase().includes('vercel')));
console.log('Render icons:', keys.filter(k => k.toLowerCase().includes('render')));
console.log('Alternates for Render (e.g., Cloud, Host):', keys.filter(k => k.toLowerCase().includes('cloud') || k.toLowerCase().includes('host')));
