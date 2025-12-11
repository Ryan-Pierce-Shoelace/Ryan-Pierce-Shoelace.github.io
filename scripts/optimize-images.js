import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const selectedSize = args[0];


const SIZE_PRESETS = {
    'thumbnail': { width: 400, height: 400, fit: 'cover', quality: 85 },
    'small': { width: 800, height: 600, fit: 'cover', quality: 85 },
    'medium': { width: 1200, height: 900, fit: 'cover', quality: 85 },
    'large': { width: 1920, height: 1080, fit: 'cover', quality: 85 },
    'hero': { width: 2560, height: 1440, fit: 'cover', quality: 85 },
    'web-ready': { width: 1920, height: null, fit: 'inside', quality: 90 }, // Maintains aspect ratio
    'all': 'process_all_sizes'
};


const inputFolder = './images/raw';
const outputFolder = './images/optimized';

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

const imageFiles = fs.readdirSync(inputFolder)
    .filter(file => file.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i));

if (imageFiles.length === 0) {
    console.log('No images found in ./raw/');
    console.log('Put your images in the raw folder and try again.');
    process.exit(1);
}

console.log(`Found ${imageFiles.length} images to optimize...`);

async function processImage(filename, preset, suffix) {
    const inputPath = path.join(inputFolder, filename);
    const nameWithoutExt = path.parse(filename).name;
    const outputPath = path.join(outputFolder, `${nameWithoutExt}${suffix}.webp`);

    try {
        let sharpImage = sharp(inputPath);

        if (preset.height) {
            sharpImage = sharpImage.resize(preset.width, preset.height, {
                fit: preset.fit,
                position: 'center'
            });
        } else {
            sharpImage = sharpImage.resize(preset.width, null, {
                fit: preset.fit,
                withoutEnlargement: true
            });
        }

        await sharpImage
            .webp({ quality: preset.quality })
            .toFile(outputPath);

        console.log(`  ✓ Created: ${nameWithoutExt}${suffix}.webp`);

    } catch (error) {
        console.log(`  ✗ Failed to process ${filename}:`, error.message);
    }
}

async function main() {
    if (!selectedSize || !SIZE_PRESETS[selectedSize]) {
        console.log('Please specify a size preset:');
        console.log('');
        console.log('Available sizes:');
        console.log('  thumbnail  - 400x400px');
        console.log('  small      - 800x600px');
        console.log('  medium     - 1200x900px');
        console.log('  large      - 1920x1080px');
        console.log('  hero       - 2560x1440px');
        console.log('  web-ready  - 1920px wide');
        console.log('  all        - Creates all sizes');
        console.log('');
        process.exit(1);
    }

    if (selectedSize === 'all') {
        const sizes = Object.keys(SIZE_PRESETS).filter(key => key !== 'all');

        for (const file of imageFiles) {
            console.log(`\nProcessing: ${file}`);
            for (const size of sizes) {
                const preset = SIZE_PRESETS[size];
                await processImage(file, preset, `-${size}`);
            }
        }
    } else {
        const preset = SIZE_PRESETS[selectedSize];
        const suffix = selectedSize === 'web-ready' ? '' : `-${selectedSize}`;

        for (const file of imageFiles) {
            console.log(`\nProcessing: ${file}`);
            await processImage(file, preset, suffix);
        }
    }

    console.log('\n✅ All images processed successfully!');
    console.log(`📁 Check the images/optimized folder for your images.`);
}

main().catch(console.error);