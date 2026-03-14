<script lang="ts">
	import { workExperiences, workLogos } from '$lib/data/resume';
	import { schools, schoolLogos } from '$lib/data/resume';
	import Skills from './Skills.svelte';
</script>

<svelte:head>
	<title>Résumé · Al-Ahmadgaid B. Asaad</title>
	<meta name="description" content="Al-Ahmadgaid B. Asaad's résumé — work, skills, and education." />
</svelte:head>

<div class="page">
	<div class="container">

		<div class="page-header">
			<p class="label">Background</p>
			<h1 class="page-title">Experience &amp; Education</h1>
		</div>

		<!-- Work Experience -->
		<section class="section">
			<h2 class="section-label">Work</h2>
			<div class="timeline">
				{#each workExperiences as work, i}
					<div class="timeline-item reveal reveal-d{Math.min(i + 1, 5)}">
						<div class="tl-logo">
							<a href={work.href} target="_blank" rel="noopener">
								<enhanced:img src={workLogos[i]} alt={work.logoAlt} sizes="48px" />
							</a>
						</div>
						<div class="tl-body">
							{#if Array.isArray(work.position)}
								{#each work.position as pos, j}
									<div class="tl-role">
										<span class="role-title">{pos}</span>
										<span class="role-date">
											{Array.isArray(work.dateRange) ? work.dateRange[j] : work.dateRange}
										</span>
									</div>
								{/each}
							{:else}
								<div class="tl-role">
									<span class="role-title">{work.position}</span>
									<span class="role-date">{work.dateRange}</span>
								</div>
							{/if}
							<a href={work.href} class="company" target="_blank" rel="noopener"
								>{work.company}</a
							>
							<span class="address">{work.address}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Skills -->
		<section class="section">
			<h2 class="section-label">Skills</h2>
			<Skills />
		</section>

		<!-- Education -->
		<section class="section">
			<h2 class="section-label">Education</h2>
			<div class="timeline">
				{#each schools as school, i}
					<div class="timeline-item reveal reveal-d{Math.min(i + 1, 5)}">
						<div class="tl-logo">
							<a href={school.href} target="_blank" rel="noopener">
								<enhanced:img src={schoolLogos[i]} alt={school.logoAlt} sizes="48px" />
							</a>
						</div>
						<div class="tl-body">
							<div class="tl-role">
								<span class="role-title">{school.degree}</span>
								<span class="role-date">{school.schoolYear}</span>
							</div>
							<a href={school.href} class="company" target="_blank" rel="noopener">
								{school.school}
							</a>
							<span class="address">{school.university}, {school.address}</span>
							{#if school.research}
								<span class="research">Research: <em>{school.research}</em></span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>

	</div>
</div>

<style>
	.page {
		padding: clamp(60px, 8vw, 100px) 0 100px;
	}

	.page-header {
		margin-bottom: clamp(48px, 7vw, 80px);
	}

	.page-title {
		font-size: clamp(36px, 5.5vw, 64px);
		font-weight: 700;
		letter-spacing: -0.04em;
		line-height: 1.08;
		color: var(--text);
		margin-top: 10px;
	}

	.section {
		margin-bottom: clamp(56px, 8vw, 96px);
	}

	.section-label {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-3);
		border-bottom: 1px solid var(--border);
		padding-bottom: 12px;
		margin-bottom: 28px;
	}

	/* Timeline */
	.timeline {
		display: flex;
		flex-direction: column;
	}

	.timeline-item {
		display: flex;
		gap: 20px;
		padding: 22px 0;
		border-bottom: 1px solid var(--border);
	}
	.timeline-item:last-child {
		border-bottom: none;
	}

	.tl-logo {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: var(--surface);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6px;
	}
	.tl-logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.tl-logo a {
		display: contents;
	}

	.tl-body {
		display: flex;
		flex-direction: column;
		gap: 4px;
		flex: 1;
		min-width: 0;
	}

	.tl-role {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
	}

	.role-title {
		font-size: 15px;
		font-weight: 600;
		color: var(--text);
	}

	.role-date {
		font-size: 13px;
		color: var(--text-3);
		white-space: nowrap;
		font-variant-numeric: tabular-nums;
	}

	.company {
		font-size: 14px;
		color: var(--accent);
		text-decoration: none;
		font-weight: 500;
	}
	.company:hover {
		text-decoration: underline;
	}

	.address {
		font-size: 13px;
		color: var(--text-3);
	}

	.research {
		font-size: 13px;
		color: var(--text-2);
		margin-top: 2px;
	}

	@media (max-width: 500px) {
		.tl-role {
			flex-direction: column;
			gap: 2px;
		}
	}
</style>
