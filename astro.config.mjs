// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nicorako.com',
	integrations: [sitemap()],
	vite: {
		server: {
			watch: {
				// Ignore editor/tool temp files (atomic-write pattern) so a fleeting
				// .tmp.<pid>.<hash> file never trips Astro's route-manifest rebuild
				// with a spurious ENOENT when it's renamed away before being stat'd.
				ignored: ['**/*.tmp.*'],
			},
		},
	},
});
