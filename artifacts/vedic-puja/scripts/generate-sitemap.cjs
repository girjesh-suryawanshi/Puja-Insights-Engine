const fs = require('fs');
const path = require('path');

const baseUrl = 'https://radheradhepuja.com';
const dataDir = path.join(__dirname, '../src/data');
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Current date for <lastmod>
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
  { loc: '/book', changefreq: 'monthly', priority: '0.9' },
  { loc: '/locations', changefreq: 'monthly', priority: '0.7' },
  { loc: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms', changefreq: 'yearly', priority: '0.3' },
];

function extractSlugs(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Simple regex to find slug: "whatever"
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    // De-duplicate in case of multiple slugs in the same file or other patterns
    return [...new Set(slugs)];
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return [];
  }
}

console.log('Generating sitemap...');

const pujaSlugs = extractSlugs(path.join(dataDir, 'pujas.ts'));
const locationSlugs = extractSlugs(path.join(dataDir, 'locations.ts'));
const blogSlugs = extractSlugs(path.join(dataDir, 'blogs.ts'));

console.log(`Found ${pujaSlugs.length} pujas, ${locationSlugs.length} locations, and ${blogSlugs.length} blogs.`);

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// 1. Static Pages
staticPages.forEach(page => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}${page.loc === '/' ? '' : page.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += `  </url>\n`;
});

// 2. Puja Pages
pujaSlugs.forEach(slug => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/puja/${slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
});

// 3. Location Pages
locationSlugs.forEach(slug => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/location/${slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
});

// 4. Blog Post Pages
blogSlugs.forEach(slug => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/blog/${slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.6</priority>\n`;
  xml += `  </url>\n`;
});

xml += '</urlset>\n';

try {
  fs.writeFileSync(sitemapPath, xml);
  console.log(`Successfully generated sitemap with ${staticPages.length + pujaSlugs.length + locationSlugs.length + blogSlugs.length} URLs at ${sitemapPath}`);
} catch (err) {
  console.error('Error writing sitemap.xml:', err);
}
