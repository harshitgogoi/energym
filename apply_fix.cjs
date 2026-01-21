
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const fixes = [
    { hex: 'c3b0c5b8c28fe280b9c3afc2b8c28f', char: '🏋️' },
    { hex: 'c3b0c5b8e2809cc28d', char: '📍' },
    { hex: 'c3a2c29de2809ec3afc2b8c28f', char: '❄️' },
    { hex: 'c382c2b0', char: '°' }
];

fixes.forEach(fix => {
    const badStr = Buffer.from(fix.hex, 'hex').toString('utf8');
    // Use global replace with split/join
    content = content.split(badStr).join(fix.char);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Applied final encoding fixes.');
