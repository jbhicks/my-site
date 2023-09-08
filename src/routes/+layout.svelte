<!-- +layout.svelte -->
<script>
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
  export const prerender = true;
</script>

<Header></Header>

<main>
	<slot />
</main>

<footer>Footer</footer>
