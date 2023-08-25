import adapter from '@sveltejs/adapter-auto';
import sveltePreProcess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
};

export default config;
