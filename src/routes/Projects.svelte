<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ayahLabLogo from '$lib/images/ayahlab.png';
</script>

<div class="section">
	<div class="container">
		<p class="label reveal">ls ./software</p>

		<!-- Applications section -->
		<h2 class="section-title reveal reveal-d1">Applications</h2>
		<p class="section-sub reveal reveal-d2">Desktop application for Quranic study — built by me.</p>

		<div class="app-grid">
			<a
				href="https://ayahlab.com"
				class="card app-card reveal reveal-d3"
				target="_blank"
				rel="noopener"
			>
				<div class="card-header"><span>drwxr-xr-x</span><span class="app-badge">My App</span></div>
				<div class="card-logo app-logo">
					<img src={ayahLabLogo} alt="AyahLab" loading="lazy" decoding="async" />
				</div>
				<div class="card-body">
					<h3>AyahLab</h3>
					<p>
						Study the Quran. Deeply. — A free, offline, private desktop app for comprehensive
						Quranic study. Available for Windows, macOS, and Linux.
					</p>
				</div>
				<span class="card-arrow" aria-hidden="true">↗</span>
			</a>
		</div>

		<div class="section-divider"></div>

		<!-- Open Source section -->
		<h2 class="section-title reveal reveal-d1">Open Source</h2>
		<p class="section-sub reveal reveal-d2">
			Julia and R packages for data science and Islamic text analysis.
		</p>

		<div class="grid">
			{#each projects as project, i (project.label)}
				<a
					href={project.href}
					class="card reveal reveal-d{Math.min(i + 1, 5)}"
					target="_blank"
					rel="external noopener"
				>
					<div class="card-header">
						<span>-rw-r--r--</span><span>{String(i + 1).padStart(2, '0')}</span>
					</div>
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
		background: color-mix(in srgb, var(--surface) 78%, transparent);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
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
		padding: 54px 24px 24px;
		border-radius: var(--r-lg);
		background: var(--bg);
		border: 1px solid var(--border);
		box-shadow: var(--card-shadow);
		text-decoration: none;
		color: var(--text);
		transition:
			transform 0.25s var(--ease),
			box-shadow 0.25s var(--ease),
			border-color 0.25s;
	}
	.card::after {
		content: '';
		position: absolute;
		inset: 0;
		border-left: 2px solid transparent;
		pointer-events: none;
		transition: border-color 0.2s;
	}
	.card:hover {
		transform: translateY(-3px);
		box-shadow: var(--card-shadow-hover);
		border-color: var(--border-2);
		text-decoration: none;
	}
	.card:hover::after {
		border-color: var(--accent);
	}
	.card-header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		padding: 9px 12px;
		border-bottom: 1px solid var(--border);
		font-size: 9px;
		letter-spacing: 0.06em;
		color: var(--text-3);
	}

	.card-logo {
		width: 56px;
		height: 56px;
		border-radius: 2px;
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

	.app-grid {
		display: grid;
		grid-template-columns: minmax(280px, 480px);
		gap: 14px;
		margin-bottom: 0;
	}

	.app-card {
		border-color: var(--accent);
		background: color-mix(in srgb, var(--accent) 4%, var(--bg));
	}
	.app-card:hover {
		border-color: var(--accent);
		background: color-mix(in srgb, var(--accent) 8%, var(--bg));
	}

	.app-badge {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--accent);
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		padding: 2px 7px;
		border-radius: 2px;
	}

	.app-logo {
		width: 64px;
		height: 64px;
	}
	.app-card .card-arrow {
		top: 58px;
	}

	.section-divider {
		margin-bottom: clamp(48px, 8vw, 80px);
	}

	.card-arrow {
		position: absolute;
		top: 24px;
		right: 24px;
		font-size: 16px;
		color: var(--text-3);
		transition:
			color 0.2s,
			transform 0.2s;
	}
	.card:hover .card-arrow {
		color: var(--accent);
		transform: translate(2px, -2px);
	}
</style>
