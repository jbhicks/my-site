<!-- +layout.svelte -->
<script>
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	export const prerender = 'auto';
</script>

<Header />

<main>
	<slot />
</main>

<footer>Footer</footer>
