const fs = require('fs');
const path = require('path');

const filePath = 'd:/ReactWorkspace/Puja-Insights-Engine/artifacts/vedic-puja/src/data/pujas.ts';

if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace all price property lines
// price: "₹2,100 onwards" -> price: "Contact for pricing"
content = content.replace(/price: ".*"/g, 'price: "Contact for pricing"');

// 2. Replace specific price mentions in FAQs and strings
// Handles ₹2,100, ₹5,500 onwards, etc.
content = content.replace(/₹\d+(?:,\d+)*(?:\sonwards)?/g, 'Contact for Pricing');

fs.writeFileSync(filePath, content);
console.log('Successfully updated all pricing to "Contact for pricing" in pujas.ts');
