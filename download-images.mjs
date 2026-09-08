// Script de test : télécharge les images du projet "Baccarat – Resonance"
// depuis l'ancien site, et les range dans public/images/projects/baccarat-resonance/

import fs from 'fs';
import path from 'path';

const images = [
  {
    url: 'https://nicorako.com/wp-content/uploads/2024/10/Titre_chef-x-tailleur_16x9-_-1008-1635.00_00_39_35.Still007_web.png',
    name: 'still-01.png',
  },
  {
    url: 'https://nicorako.com/wp-content/uploads/2024/10/Titre_chef-x-tailleur_16x9-_-1008-1635.00_00_31_02.Still006_web.png',
    name: 'still-02.png',
  },
  {
    url: 'https://nicorako.com/wp-content/uploads/2024/10/Titre_chef-x-tailleur_16x9-_-1008-1635.00_00_13_09.Still005_web.png',
    name: 'still-03.png',
  },
];

const outDir = './public/images/projects/baccarat-resonance';
fs.mkdirSync(outDir, { recursive: true });

for (const img of images) {
  const res = await fetch(img.url);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(outDir, img.name), buffer);
  console.log(`✔ ${img.name} téléchargée`);
}

console.log('Terminé !');
