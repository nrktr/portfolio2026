// Télécharge une image de couverture pour chacun des projets du portfolio
// depuis l'ancien site, et les range dans public/images/projects/<slug>/cover.<ext>

import fs from 'fs';
import path from 'path';

const projects = [
  { slug: 'baccarat-resonance', url: 'https://nicorako.com/wp-content/uploads/2024/10/Titre_chef-x-tailleur_16x9-_-1008-1635.00_00_13_09.Still005_web-1024x576.png' },
  { slug: 'christofle-malmaison', url: 'https://nicorako.com/wp-content/uploads/2026/08/thumbnail-christofle-riviera-1024x576.png' },
  { slug: 'riot-games-lec-give-me-chaos', url: 'https://nicorako.com/wp-content/uploads/2026/03/CHAOS-portfolio-01-1024x576.png' },
  { slug: 'laurent-perrier-voeux', url: 'https://nicorako.com/wp-content/uploads/2026/03/LAURENT-PERRIER-VX-2025-1024x576.png' },
  { slug: 'team-vitality-x-evnia-monitor-madness', url: 'https://nicorako.com/wp-content/uploads/2026/03/TV-EVNIA-portfolio-static-01-1024x576.png' },
  { slug: 'vitality-x-asus-rog-x-blast-tv', url: 'https://nicorako.com/wp-content/uploads/2026/03/TV-ASUS-ROG-x-BLAST-cover-1024x576.png' },
  { slug: 'g2-esports-mastercard-gamer-academy', url: 'https://nicorako.com/wp-content/uploads/2026/03/G2-x-MC-GA-2025-cover-1024x576.png' },
  { slug: 'league-of-legends-2023-formats-ecosystem', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-LEC-2023-1024x576.webp' },
  { slug: 'esports-world-cup-explainer', url: 'https://nicorako.com/wp-content/uploads/2024/10/clubs-only-1024x576.png' },
  { slug: 'the-whispering-eclipse', url: 'https://nicorako.com/wp-content/uploads/2024/10/the-whispering-eclipse-1024x576.png' },
  { slug: 'character-animation-reel', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-character-animation-reel-v2-1024x576.webp' },
  { slug: 'kirosen-covers', url: 'https://nicorako.com/wp-content/uploads/2024/10/pattern_3b_-1024x576.png' },
  { slug: 'lec-dance-with-me', url: 'https://nicorako.com/wp-content/uploads/2024/10/KIA-LEC-COME-DANCE-WITH-ME-01-1024x576.png' },
  { slug: 'fans-storyboard', url: 'https://nicorako.com/wp-content/uploads/2020/10/08-1024x576.png' },
  { slug: 'just-dance-2022-world-tour', url: 'https://nicorako.com/wp-content/uploads/2024/10/jdu-2022-portfolio-vignette-1024x576.png' },
  { slug: 'oo-end-year-gala-logo', url: 'https://nicorako.com/wp-content/uploads/2024/10/gala-final-horizontal-1024x898.png' },
  { slug: 'vitality-alternate', url: 'https://nicorako.com/wp-content/uploads/2024/10/thumbnail-vitality-alternate-1024x576.png' },
  { slug: 'the-api-directors-cut', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-allianz-EH-API-1024x576.webp' },
  { slug: 'tsunami-alert', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-tsunami-1024x576.webp' },
  { slug: 'resilience', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-resilience-1024x1024.webp' },
  { slug: 'icc-motion-identity', url: 'https://nicorako.com/wp-content/uploads/2023/10/featured-ICC-01-1024x508.webp' },
  { slug: 'ghoster-crame', url: 'https://nicorako.com/wp-content/uploads/2023/10/featured-ghoster-crame-I-1024x508.webp' },
  { slug: 'gelled-water-droid-fantom', url: 'https://nicorako.com/wp-content/uploads/2023/10/featured-gelled-water.webp' },
  { slug: 'baccarat-alchemy', url: 'https://nicorako.com/wp-content/uploads/2023/10/featured-baccarat-lion-1024x451.webp' },
  { slug: 'roxy-cute-2-0', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-roxy-cute-819x1024.webp' },
  { slug: 'khf-music-video', url: 'https://nicorako.com/wp-content/uploads/2023/11/featured-KHF-1024x432.webp' },
];

for (const project of projects) {
  const ext = path.extname(new URL(project.url).pathname);
  const outDir = `./public/images/projects/${project.slug}`;
  fs.mkdirSync(outDir, { recursive: true });

  const res = await fetch(project.url);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(outDir, `cover${ext}`), buffer);
  console.log(`✔ ${project.slug}`);
}

console.log('Terminé ! 26 images de couverture téléchargées.');
