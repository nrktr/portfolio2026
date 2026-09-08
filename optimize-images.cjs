const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const files = process.argv.slice(2);

(async () => {
	let totalBefore = 0;
	let totalAfter = 0;
	for (const file of files) {
		const dir = path.dirname(file);
		const ext = path.extname(file);
		const base = path.basename(file, ext);
		const outPath = path.join(dir, `${base}-optimized.webp`);

		const before = fs.statSync(file).size;
		const isGif = ext.toLowerCase() === '.gif';
		await sharp(file, isGif ? { animated: true } : undefined)
			.resize({ width: 2000, withoutEnlargement: true })
			.webp({ quality: 88 })
			.toFile(outPath);
		const after = fs.statSync(outPath).size;

		totalBefore += before;
		totalAfter += after;
		const pct = (100 - (after / before) * 100).toFixed(0);
		console.log(`${file}\n  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)\n  -> ${outPath}\n`);
	}
	console.log(`TOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (-${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}%)`);
})();
