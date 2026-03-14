<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<div class="section">
	<div class="container">
		<p class="label reveal">Software</p>
		<h2 class="section-title reveal reveal-d1">Open Source</h2>
		<p class="section-sub reveal reveal-d2">
			Julia, R, and Python packages for data science, NLP, and Islamic text analysis.
		</p>

		<div class="grid">
			{#each projects as project, i}
				<a
					href={project.href}
					class="card reveal reveal-d{Math.min(i + 1, 5)}"
					target="_blank"
					rel="noopener"
				>
					<div class="card-logo">
						<img src={project.logo} alt={project.label} loading="lazy" decoding="async" />
					</div>
					<div class="card-body">
						<h3>{project.label}</h3>
						{#if project.desc}
							<p>{project.desc}</p>
						{:else}
							<p>Julia package for Islamicate texts from the KiTaB project.</p>
						{/if}
					</div>
					<span class="card-arrow" aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.section {
		padding: clamp(80px, 12vw, 140px) 0;
		background: var(--surface);
	}

	.section-sub {
		font-size: 17px;
		color: var(--text-2);
		max-width: 500px;
		margin-top: 14px;
		margin-bottom: clamp(40px, 6vw, 64px);
		line-height: 1.65;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 14px;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 28px;
		border-radius: var(--r-lg);
		background: var(--bg);
		border: 1px solid var(--border);
		box-shadow: var(--card-shadow);
		text-decoration: none;
		color: var(--text);
		transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), border-color 0.25s;
	}
	.card:hover {
		transform: translateY(-5px);
		box-shadow: var(--card-shadow-hover);
		border-color: var(--border-2);
		text-decoration: none;
	}

	.card-logo {
		width: 56px;
		height: 56px;
		border-radius: 14px;
		background: var(--surface-2);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		overflow: hidden;
		padding: 8px;
	}
	.card-logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.card-body {
		flex: 1;
	}
	.card-body h3 {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 8px;
		letter-spacing: -0.01em;
	}
	.card-body p {
		font-size: 14px;
		color: var(--text-2);
		line-height: 1.55;
	}

	.card-arrow {
		position: absolute;
		top: 24px;
		right: 24px;
		font-size: 16px;
		color: var(--text-3);
		transition: color 0.2s, transform 0.2s;
	}
	.card:hover .card-arrow {
		color: var(--accent);
		transform: translate(2px, -2px);
	}
</style>
