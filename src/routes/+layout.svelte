<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '$lib/styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
