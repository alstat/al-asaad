<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import ScrollSpy from './ScrollSpy.svelte';
	import '$lib/styles.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { theme } from '$lib/stores/theme';

	inject({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		theme.init();
	});

	afterNavigate(() => {
		const io = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('in');
						io.unobserve(e.target);
					}
				}),
			{ threshold: 0.08 }
		);
		document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => io.observe(el));
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<ScrollSpy />
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
		padding-top: var(--nav-h);
	}
</style>
