
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
const content = fs.readFileSync(filePath, 'utf8');

// Find the line with the weightlifter
const index = content.indexOf('<span style={{ fontSize: \'2rem\' }}>');
if (index !== -1) {
    const start = index + '<span style={{ fontSize: \'2rem\' }}>'.length;
    const end = content.indexOf('</span>', start);
    const snippet = content.substring(start, end);
    console.log('Weightlifter snippet:', snippet);
    console.log('Hex:', Buffer.from(snippet).toString('hex'));
}

// Find the line with A.T. Road (Location pin)
const index2 = content.indexOf('A.T. Road, Tinsukia');
if (index2 !== -1) {
    // Backtrack to find the span content
    const startSearch = content.lastIndexOf("color: 'var(--accent-yellow)'", index2);
    const start = content.indexOf('>', startSearch) + 1;
    const end = content.indexOf('</span>', start);
    const snippet = content.substring(start, end);
    console.log('Location snippet:', snippet);
    console.log('Hex:', Buffer.from(snippet).toString('hex'));
}
