
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
    ['ðŸ“ž', '📞'],
    ['ðŸ“§', '📧'],
    ['ðŸ“ ', '📍'],
    ['ðŸ ‹ï¸ ', '🏋️'],
    ['ðŸ’¡', '💡'],
    ['ðŸ“º', '📺'],
    ['ðŸ“Š', '📊'],
    ['ðŸ”Š', '🔊'],
    ['â „ï¸ ', '❄️'],
    ['ðŸ“±', '📱']
];

let fixedContent = content;
replacements.forEach(([bad, good]) => {
    fixedContent = fixedContent.split(bad).join(good);
});

if (content !== fixedContent) {
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('Fixed encoding issues in App.jsx');
} else {
    console.log('No matching sequences found to fix');
    const index = content.indexOf('+91 97067');
    if (index !== -1) {
        console.log('Snippet around phone number:', content.substring(index - 50, index + 20));
        // Print hex codes to debug
        const snippet = content.substring(index - 10, index);
        console.log('Hex codes:', Buffer.from(snippet).toString('hex'));
    }
}
