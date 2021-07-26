<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	let halfmoon;

	if (browser) {
		onMount(async () => {
			halfmoon = (await import('halfmoon')).default;
			halfmoon.onDOMContentLoaded()
		});
	}
</script>

<style global>
	@import "../../static/halfmoon-variable-override.css";
</style>

<Header {halfmoon} />

<main>
	<slot />
</main>