
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
const content = fs.readFileSync(filePath, 'utf8');

// Find Snowflake (Climate Control)
const indexSnow = content.indexOf('maintaining optimal');
if (indexSnow !== -1) {
    const lineEnd = content.indexOf('}', indexSnow);
    const snippet = content.substring(indexSnow, lineEnd);
    // Find the icon part
    const iconStart = snippet.indexOf("icon: '");
    if (iconStart !== -1) {
        const valStart = iconStart + 7;
        const valEnd = snippet.indexOf("'", valStart);
        const iconVal = snippet.substring(valStart, valEnd);
        console.log('Snowflake snippet:', iconVal);
        console.log('Snowflake Hex:', Buffer.from(iconVal).toString('hex'));
    }

    // Find degree symbol
    const degStart = snippet.indexOf('68') + 2;
    const degEnd = snippet.indexOf('F', degStart);
    const degVal = snippet.substring(degStart, degEnd);
    console.log('Degree snippet:', degVal);
    console.log('Degree Hex:', Buffer.from(degVal).toString('hex'));
}
