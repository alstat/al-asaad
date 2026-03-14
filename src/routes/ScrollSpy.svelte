<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	let activeId = 'about';
	let observers: IntersectionObserver[] = [];

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		sections.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (!el) return;
			const observer = new IntersectionObserver(
				(entries) => entries.forEach((e) => { if (e.isIntersecting) activeId = id; }),
				{ rootMargin: '-20% 0px -60% 0px' }
			);
			observer.observe(el);
			observers.push(observer);
		});
	});

	onDestroy(() => observers.forEach((o) => o.disconnect()));
</script>

{#if $page.url.pathname === '/'}
	<nav class="spy" aria-label="Page sections">
		{#each sections as { id, label }}
			<button
				class="dot"
				class:active={activeId === id}
				onclick={() => scrollTo(id)}
				aria-label={label}
			>
				<span class="tip">{label}</span>
			</button>
		{/each}
	</nav>
{/if}

<style>
	.spy {
		position: fixed;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 10px;
		z-index: 50;
	}

	.dot {
		position: relative;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		border: 1.5px solid var(--border-2);
		background: transparent;
		padding: 0;
		cursor: pointer;
		opacity: 0.38;
		transition: opacity 0.25s, transform 0.25s, background 0.25s, border-color 0.25s;
	}
	.dot.active {
		background: var(--accent);
		border-color: var(--accent);
		opacity: 1;
		transform: scale(1.5);
	}
	.dot:hover {
		opacity: 0.7;
	}
	.dot:hover .tip {
		opacity: 1;
		transform: translateY(-50%) translateX(0);
	}

	.tip {
		position: absolute;
		right: calc(100% + 10px);
		top: 50%;
		transform: translateY(-50%) translateX(6px);
		background: var(--surface-2);
		border: 1px solid var(--border);
		color: var(--text);
		font-size: 11px;
		font-family: var(--font-sans);
		padding: 3px 8px;
		border-radius: 6px;
		white-space: nowrap;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.2s, transform 0.2s;
	}

	@media (max-width: 640px) {
		.spy {
			display: none;
		}
	}
</style>
