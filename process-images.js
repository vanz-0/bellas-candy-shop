const fs = require('fs');
const path = require('path');

const mappings = [
    { src: 'temp_extract/wafers', dest: 'public/images/wafers' },
    { src: 'temp_extract/chocolate', dest: 'public/images/chocolate' },
    { src: 'temp_extract/artisan', dest: 'public/images/artisan' }
];

mappings.forEach(({ src, dest }) => {
    if (!fs.existsSync(src)) {
        console.error(`Source directory not found: ${src}`);
        return;
    }

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);
    files.forEach(file => {
        // Expected format: ezgif-frame-001.jpg
        const match = file.match(/ezgif-frame-(\d+)\.jpg/);
        if (match) {
            const number = parseInt(match[1], 10);
            const newName = `${number}.jpg`;

            // Copy instead of move to be safe, or just move
            fs.copyFileSync(path.join(src, file), path.join(dest, newName));
        }
    });

    console.log(`Processed ${src} -> ${dest}`);
});

console.log('Image processing complete.');
