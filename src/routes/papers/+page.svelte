<script lang="ts">
	import { papers } from '$lib/data/papers';
	import type { Paper, Thesis } from '$lib/data/papers';

	const theses = papers.filter((p): p is Thesis => p.type === 'thesis');
	const nonTheses = papers.filter((p) => p.type !== 'thesis');

	const byYear: { [key: string]: Paper[] } = {};
	for (const p of nonTheses) {
		if (!byYear[p.year]) byYear[p.year] = [];
		byYear[p.year].push(p);
	}
	const years = Object.keys(byYear).sort((a, b) => +b - +a);
</script>

<svelte:head>
	<title>Papers · Al-Ahmadgaid B. Asaad</title>
	<meta
		name="description"
		content="Theses, conference papers, and journal articles by Al-Ahmadgaid B. Asaad."
	/>
</svelte:head>

<div class="page">
	<div class="container">
		<div class="page-header">
			<p class="label">find ./research -type f</p>
			<h1 class="page-title">Publications</h1>
			<p class="page-sub">Theses, conference papers, and journal articles.</p>
			<p class="result-count">{papers.length} records found</p>
		</div>

		<!-- Theses -->
		<section class="pub-section">
			<h2 class="section-label"><span>DIR</span> Theses</h2>
			<div class="pub-list">
				{#each theses as thesis, i (thesis.title)}
					<div class="pub-item reveal reveal-d{Math.min(i + 1, 5)}">
						<div class="pub-meta">
							<span class="pub-year">{thesis.year}</span>
							<span class="pub-badge thesis">Thesis</span>
							<span class="pub-emoji">{thesis.application}</span>
						</div>
						<div class="pub-body">
							<p class="pub-title">
								<a href={thesis.href} target="_blank" rel="external noopener">{thesis.title}</a>
							</p>
							<div class="pub-details">
								<span class="pub-author">{thesis.author}</span>
								<span class="pub-venue">{thesis.publisher}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- By year -->
		{#each years as year (year)}
			<section class="pub-section">
				<h2 class="section-label"><span>LOG</span> {year}</h2>
				<div class="pub-list">
					{#each byYear[year] as paper, i (paper.title)}
						<div class="pub-item reveal reveal-d{Math.min(i + 1, 5)}">
							<div class="pub-meta">
								<span
									class="pub-badge"
									class:journal={paper.type === 'journal'}
									class:conference={paper.type === 'conference'}>{paper.type}</span
								>
								<span class="pub-emoji">{paper.application}</span>
							</div>
							<div class="pub-body">
								<p class="pub-title">
									<a href={paper.href} target="_blank" rel="external noopener">{paper.title}</a>
								</p>
								<div class="pub-details">
									<span class="pub-author">
										{#if Array.isArray(paper.author)}
											{#each paper.author as a, k (k)}
												{#if a.includes('A.-A. B.')}
													<strong>{a}</strong>
												{:else}
													{a}
												{/if}
												{#if k < paper.author.length - 2},
												{/if}
												{#if k === paper.author.length - 2}
													&amp;
												{/if}
											{/each}
										{:else}
											<strong>{paper.author}</strong>
										{/if}
									</span>
									{#if 'journal' in paper && paper.journal}
										<span class="pub-venue">
											<em>{paper.journal}</em>
											{#if 'issue' in paper && paper.issue}, <strong>{paper.issue}</strong>{/if}
											{#if 'pages' in paper && paper.pages}, {paper.pages}{/if}
										</span>
									{:else if 'proceeding' in paper && paper.proceeding}
										<span class="pub-venue">
											<em>{paper.proceeding}</em>
											{#if 'address' in paper && paper.address}, {paper.address}{/if}
										</span>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<style>
	.page {
		padding: clamp(60px, 8vw, 100px) 0 100px;
	}
	.page::before {
		content: 'INDEX / PUBLICATIONS';
		position: fixed;
		right: -38px;
		top: 48%;
		transform: rotate(90deg);
		font-size: 9px;
		letter-spacing: 0.18em;
		color: var(--text-3);
	}

	.page-header {
		margin-bottom: clamp(48px, 7vw, 80px);
	}

	.page-title {
		font-size: clamp(36px, 5.5vw, 64px);
		font-weight: 700;
		letter-spacing: -0.06em;
		line-height: 1.08;
		color: var(--text);
		margin-top: 10px;
		margin-bottom: 14px;
	}
	.page-title::before {
		content: '> ';
		color: var(--accent);
	}
	.page-title::after {
		content: '_';
		color: var(--accent);
		animation: blink 1.1s steps(1) infinite;
	}

	.page-sub {
		font-size: 17px;
		color: var(--text-2);
		max-width: 480px;
		line-height: 1.65;
	}
	.result-count {
		margin-top: 20px;
		font-size: 10px;
		color: var(--accent);
		letter-spacing: 0.08em;
	}
	.result-count::before {
		content: '[OK] ';
		color: var(--text-3);
	}

	.pub-section {
		margin-bottom: clamp(48px, 7vw, 80px);
	}

	.section-label {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-2);
		border-bottom: 1px solid var(--border);
		padding-bottom: 12px;
		margin-bottom: 20px;
	}
	.section-label span {
		color: var(--accent);
		margin-right: 10px;
	}

	.pub-list {
		display: flex;
		flex-direction: column;
	}

	.pub-item {
		display: flex;
		gap: 20px;
		padding: 22px 14px;
		border-bottom: 1px solid var(--border);
		transition:
			background 0.2s,
			box-shadow 0.2s;
	}
	.pub-item:hover {
		background: var(--accent-dim);
		box-shadow: inset 2px 0 var(--accent);
	}
	.pub-item:last-child {
		border-bottom: none;
	}

	.pub-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 7px;
		flex-shrink: 0;
		padding-top: 2px;
		min-width: 88px;
	}

	.pub-year {
		font-size: 13px;
		color: var(--text-3);
		font-variant-numeric: tabular-nums;
		font-weight: 500;
	}

	.pub-badge {
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		padding: 3px 8px;
		border-radius: 2px;
		background: var(--surface-2);
		color: var(--text-2);
	}
	.pub-badge.journal {
		background: var(--accent-dim);
		color: var(--accent);
	}
	.pub-badge.conference {
		background: rgba(139, 92, 246, 0.12);
		color: #a78bfa;
	}
	.pub-badge.thesis {
		background: rgba(52, 211, 153, 0.1);
		color: #34d399;
	}

	.pub-emoji {
		font-size: 15px;
	}

	.pub-body {
		flex: 1;
		min-width: 0;
	}

	.pub-title {
		font-size: 15px;
		font-weight: 500;
		line-height: 1.5;
		margin-bottom: 7px;
	}
	.pub-title a {
		color: var(--text);
		transition: color 0.2s;
	}
	.pub-title a:hover {
		color: var(--accent);
		text-decoration: none;
	}
	.pub-title a::after {
		content: ' ↗';
		color: var(--text-3);
		font-size: 10px;
	}

	.pub-details {
		font-size: 13px;
		color: var(--text-2);
		line-height: 1.55;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.pub-venue {
		color: var(--text-3);
	}

	@media (max-width: 560px) {
		.page::before {
			display: none;
		}
		.pub-item {
			flex-direction: column;
			gap: 10px;
		}
		.pub-meta {
			flex-direction: row;
			align-items: center;
			min-width: unset;
		}
	}
</style>
