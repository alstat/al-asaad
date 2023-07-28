<script>
	import Header from "./Header.svelte";
	import "$lib/styles.css";
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<footer>
		<p class="footer-arabic">الحمد لله</p>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amiri+Quran&family=El+Messiri:wght@600&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Yellowtail&display=swap');
	:global(body) {
		font-family: 'Saira Condensed', sans-serif;
		font-size: 14pt;
	}
	:global(div.title-emphasis) {
		font-family: 'Yellowtail', cursive;
		font-size: 25pt;
		text-align: center;
		background: #00FF00;
		background: linear-gradient(to left, #bbff00 0%, #005eff 25%, #FF0000 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	:global(h1) {
		background: #00FF00;
		background: linear-gradient(to left, #bbff00 0%, #005eff 25%, #FF0000 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	:global(.arabic) {
		font-family: 'Amiri Quran', serif;
	}
	
	.footer-arabic {
		font-family: 'El Messiri', sans-serif;
		background: linear-gradient(to left, #003591 0%, #7e0094 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
