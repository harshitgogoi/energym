
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
    // Use a global replace
    fixedContent = fixedContent.split(bad).join(good);
});

if (content !== fixedContent) {
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('Fixed encoding issues in App.jsx');
} else {
    console.log('No matching sequences found to fix');
    // Debug: print a snippet to see what's actually there
    const index = content.indexOf('+91 97067');
    if (index !== -1) {
        console.log('Snippet around phone number:', content.substring(index - 20, index + 20));
    }
}
