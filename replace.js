const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const dir = 'd:\\ReactWorkspace\\Puja-Insights-Engine\\artifacts\\vedic-puja\\src';
let files = walk(dir);
files.push('d:\\ReactWorkspace\\Puja-Insights-Engine\\artifacts\\vedic-puja\\index.html');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replacements
  content = content.replace(/Vedic<span className="text-primary">Puja<\/span>/g, 'Radhe Radhe<span className="text-primary">Puja</span>');
  content = content.replace(/VedicPuja/g, 'Radhe Radhe Puja');
  content = content.replace(/Vedic Puja/g, 'Radhe Radhe Puja');
  // Emails
  content = content.replace(/blessings@vedicpuja\.com/gi, 'radhepujabangalore@gmail.com');
  // Phone numbers  
  content = content.replace(/\+91 98765 43210/g, '+91 95463 08950');
  content = content.replace(/\+919876543210/g, '+919546308950');
  content = content.replace(/98765 43210/g, '95463 08950');
  content = content.replace(/9876543210/g, '9546308950');

  if(content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  }
});
