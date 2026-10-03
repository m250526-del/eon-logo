import satori from 'satori';
import fs from 'fs/promises';
import { EonLogo } from './Logo.js';

async function generateSVG() {
    // 1. Fetch a custom cosmic serif font (Cinzel)
    const fontData = await fetch(
        'https://cdn.jsdelivr.net/fontsource/fonts/cinzel@latest/latin-400-normal.ttf'
    ).then((res) => res.arrayBuffer());

    // 2. Compile component into SVG vector string
    const svg = await satori(EonLogo(), {
        width: 1200,
        height: 800,
        fonts: [
            {
                name: 'Cinzel',
                data: fontData,
                weight: 400,
                style: 'normal',
            },
        ],
    });

    // 3. Save the editable SVG file
    await fs.writeFile('logo.svg', svg);
    console.log('✨ logo.svg generated successfully!');
}

generateSVG();