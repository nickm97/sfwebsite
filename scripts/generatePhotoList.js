import { readdir } from 'fs/promises';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Fix voor __dirname in ES-modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '../');

// Pad naar de studio-map en output JSON-bestand
const folderPath = join(__dirname, '../public/assets/wedding-tom-cynthia');
const outputPath = join(__dirname, '../assets/photoList-wedding-tom-cynthia.json');

async function generatePhotoList() {
  try {
    // Lees bestanden in de map
    const files = await readdir(folderPath);
    
    // Filter op afbeeldingsbestanden
    const imageFiles = files.filter(file => {
      const ext = file.split('.').pop().toLowerCase();
      return ['jpg', 'jpeg', 'png', 'webp'].includes(ext);
    });

    // Schrijf naar JSON-bestand
    await writeFile(outputPath, JSON.stringify(imageFiles, null, 2), 'utf-8');
    console.log('Photo list generated:', imageFiles);
  } catch (error) {
    console.error('Error generating photo list:', error);
  }
}

// Voer de functie uit
generatePhotoList();
