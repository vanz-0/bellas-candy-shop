const pdf2img = require('pdf-img-convert');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/Bella_logo_vectorfile.pdf');
const outputPath = path.join(__dirname, 'public/logo-new.png');

console.log(`Converting ${inputPath} to PNG...`);

// Convert the first page (page_numbers: [1])
pdf2img.convert(inputPath, { width: 1000, page_numbers: [1] }) // Set width for high quality
    .then(function (images) {
        // images is an array of Uint8Arrays
        fs.writeFileSync(outputPath, images[0]);
        console.log(`Successfully created ${outputPath}`);
    })
    .catch(function (error) {
        console.error("Error converting PDF:", error);
    });
