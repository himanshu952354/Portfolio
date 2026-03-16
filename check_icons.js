const si = require('react-icons/si');
console.log('SiVercel:', !!si.SiVercel);
console.log('SiRender:', !!si.SiRender);
// Let's also check if there are any other Render icons or alternatives
const keys = Object.keys(si);
const renderKeys = keys.filter(k => k.toLowerCase().includes('render'));
console.log('Render keys found:', renderKeys);
