const fs = require('fs');
const path = require('path');

const dirs = [
    'public/images/wafers',
    'public/images/chocolate',
    'public/images/artisan'
];

// Minimal 1x1 transparent WebP base64
const webpBase64 = 'UklGRkAAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqAQABAAFAJiWkAANwAP790A0A';
const buffer = Buffer.from(webpBase64, 'base64');

dirs.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }

    console.log(`Generating images in ${dir}...`);
    for (let i = 1; i <= 120; i++) {
        fs.writeFileSync(path.join(fullPath, `${i}.webp`), buffer);
    }
});

console.log('Done generating placeholder images.');
