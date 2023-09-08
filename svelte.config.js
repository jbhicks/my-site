import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	base: '/my-app',
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		},
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
};

export default config;
