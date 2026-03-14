<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/alasaad-logo.svg';
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handle = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handle, { passive: true });
		return () => window.removeEventListener('scroll', handle);
	});
</script>

<header class:scrolled>
	<div class="container nav-inner">
		<a href="/" class="logo-link" aria-label="Home">
			<img src={logo} alt="Al" width="28" height="28" />
		</a>

		<nav aria-label="Main navigation">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/papers" class:active={$page.url.pathname === '/papers'}>Papers</a>
			<a href="/resume" class:active={$page.url.pathname === '/resume'}>Résumé</a>
		</nav>

		<button
			class="toggle"
			onclick={theme.toggle}
			aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{#if $theme === 'dark'}<Sun size={17} />{:else}<Moon size={17} />{/if}
		</button>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: var(--nav-h);
		border-bottom: 1px solid transparent;
		transition: background 0.3s, border-color 0.3s;
	}
	header.scrolled {
		background: var(--glass);
		backdrop-filter: blur(20px) saturate(180%);
		-webkit-backdrop-filter: blur(20px) saturate(180%);
		border-color: var(--border);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--nav-h);
	}

	.logo-link {
		display: flex;
		align-items: center;
		opacity: 0.8;
		transition: opacity 0.2s;
		text-decoration: none;
	}
	.logo-link:hover {
		opacity: 1;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 2px;
	}
	nav a {
		padding: 7px 14px;
		border-radius: var(--r);
		font-size: 14px;
		font-weight: 500;
		color: var(--text-2);
		transition: color 0.2s, background 0.2s;
		text-decoration: none;
	}
	nav a:hover {
		color: var(--text);
	}
	nav a.active {
		color: var(--text);
		background: var(--surface-2);
	}

	.toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: var(--r);
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-2);
		cursor: pointer;
		transition: color 0.2s, border-color 0.2s, background 0.2s;
	}
	.toggle:hover {
		color: var(--text);
		border-color: var(--border-2);
		background: var(--surface);
	}

	@media (max-width: 500px) {
		nav a {
			padding: 7px 10px;
			font-size: 13px;
		}
	}
</style>
