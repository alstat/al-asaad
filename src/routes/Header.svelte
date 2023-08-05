<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import logo from '$lib/images/alasaad-logo.svg';
</script>

<header>
	<div class="corner" />

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
					<img src={logo} alt="SvelteKit" class="nav-logo" />
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/papers' ? 'page' : undefined}>
				<a href="/papers">Papers</a>
			</li>
			<li aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}>
				<a href="/resume">Résumé</a>
			</li>
			<li aria-current={$page.url.pathname === '/ai-projects' ? 'page' : undefined}>
				<a href="/ai-projects">A.I.</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}
	.nav-logo {
		display: inline;
		padding-right: 0px;
		width: 32.64px;
	}
	nav {
		--background: rgba(255, 255, 255, 0.05);
		display: flex;
		justify-content: center;
		backdrop-filter: blur(40px);
		-webkit-backdrop-filter: blur(40px);
		background-clip: content-box;
		-webkit-background-clip: content-box;
		--box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.03);
		width: 100%;
		position: fixed;
		left: 50%;
		margin-left: -49.9%;
		overflow: hidden;
		z-index: 2;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
