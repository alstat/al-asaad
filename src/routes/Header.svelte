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
			<img src={logo} alt="" width="26" height="26" />
			<span><b>al</b>@portfolio:<i>~</i>$</span>
		</a>

		<nav aria-label="Main navigation">
			<a href="/" class:active={$page.url.pathname === '/'}><span>01.</span>home</a>
			<a href="/papers" class:active={$page.url.pathname === '/papers'}><span>02.</span>papers</a>
			<a href="/resume" class:active={$page.url.pathname === '/resume'}><span>03.</span>résumé</a>
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
		background: color-mix(in srgb, var(--bg) 68%, transparent);
		border-bottom: 1px solid var(--border);
		transition:
			background 0.3s,
			border-color 0.3s;
	}
	header.scrolled {
		background: var(--glass);
		backdrop-filter: blur(20px) saturate(180%);
		-webkit-backdrop-filter: blur(20px) saturate(180%);
		border-color: var(--border-2);
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
		gap: 10px;
		opacity: 0.9;
		transition: opacity 0.2s;
		text-decoration: none;
	}
	.logo-link img {
		filter: grayscale(1);
	}
	.logo-link span {
		color: var(--text-2);
		font-size: 12px;
		white-space: nowrap;
	}
	.logo-link b,
	.logo-link i {
		color: var(--accent);
		font-style: normal;
		font-weight: 500;
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
		border-radius: 0;
		font-size: 14px;
		font-weight: 500;
		color: var(--text-2);
		transition:
			color 0.2s,
			background 0.2s;
		text-decoration: none;
	}
	nav a span {
		color: var(--accent);
		font-size: 10px;
		margin-right: 4px;
	}
	nav a:hover {
		color: var(--text);
	}
	nav a.active {
		color: var(--accent);
		background: var(--accent-dim);
		box-shadow: inset 0 -1px var(--accent);
	}

	.toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-2);
		cursor: pointer;
		transition:
			color 0.2s,
			border-color 0.2s,
			background 0.2s;
	}
	.toggle:hover {
		color: var(--text);
		border-color: var(--border-2);
		background: var(--surface);
	}

	@media (max-width: 500px) {
		.logo-link span {
			display: none;
		}
		nav a {
			padding: 7px 8px;
			font-size: 12px;
		}
		nav a span {
			display: none;
		}
	}
</style>
