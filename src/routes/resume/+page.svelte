<script lang="ts">
	import { workExperiences, workLogos } from '$lib/data/resume';
	import { schools, schoolLogos } from '$lib/data/resume';
	import Skills from './Skills.svelte';
</script>

<svelte:head>
	<title>Résumé</title>
	<meta name="description" content="Al-Ahmadgaid B. Asaad's Résumé" />
</svelte:head>

<div class="text-column">
	<h1>Background and Experience</h1>
	<br /><br />
	<div class="title-emphasis">Work</div>
	<br />
	<table>
		<tbody>
			{#each workExperiences as work, i}
				{#if work['position'].length > 1}
					{#each work['position'] as job, j}
						<tr>
							{#if j < 1}
								<td class="logo-td">
									<a href={work['href']}>
										<img src={workLogos[i]} alt={work['logoAlt']} class="logo" />
									</a>
								</td>
							{:else}
								<td>
									<div class="dots top" />
									<div class="vertical-line" />
									<div class="dots below" />
								</td>
							{/if}
							<td
								>{work['dateRange'][j]}:
								<br />
								<b>{job}</b>
								<br />
								{#if j < 1}
									<span class="emphasis">
										<b>
											<a href={work['href']}>{work['company']}</a>
										</b>
									</span>
									<br />{work['address']}<br /><br />
								{:else}
									<br />
								{/if}
							</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td class="logo-td">
							<a href={work['href']}>
								<img src={workLogos[i]} alt={work['logoAlt']} class="logo" />
							</a>
						</td>
						<td
							>{work['dateRange']}:
							<br />
							{#if work['position'].length > 1}
								<b>{work['position'].slice(-1)}</b>
							{:else}
								<b>{work['position']}</b>
							{/if}
							<br />
							<span class="emphasis">
								<b>
									<a href={work['href']}>{work['company']}</a>
								</b>
							</span>
							<br />{work['address']}<br /><br />
						</td>
					</tr>
				{/if}
				<tr />
			{/each}
		</tbody>
	</table>
	<br />
	<br />
	<div class="title-emphasis">Skills</div>
	<br />
	<Skills />
	<br />
	<div class="title-emphasis">Education</div>
	<br />
	<table>
		<tbody>
			{#each schools as school, i}
				<tr>
					<td class="logo-td">
						<a href={school['href']}>
							<img src={schoolLogos[i]} alt={school['logoAlt']} class="logo" />
						</a>
					</td>
					<td>
						{school['schoolYear']}: <br />
						<b><span class="emphasis"> {school['degree']} </span></b><br />
						<a href={school['href']}>{school['school']}</a>,
						{school['university']}<br />
						{school['address']}<br />
						{#if school['research'] !== undefined}
							Research: <span class="emphasis">{school['research']}</span><br />
						{/if}
						<br />
					</td>
				</tr>
			{/each}
			<tr />
		</tbody>
	</table>
</div>

<style>
	td {
		text-align: left;
		vertical-align: top;
	}

	img {
		border-radius: 5px;
	}
	.logo-td {
		width: 60px;
	}
	.logo {
		width: 50px;
		padding: 10px;
	}
	.emphasis {
		color: var(--color-theme-1);
	}
	.vertical-line {
		position: absolute;
		margin-top: -100px;
		margin-left: 66px;
		border-left: 1px solid #9400f7;
		height: 135px;
		z-index: -1;
	}
	.dots {
		height: 4px;
		width: 4px;
		background-color: #6e01b7;
		border-radius: 50%;
	}
	.top {
		position: absolute;
		margin-top: -108px;
		margin-left: 64.5px;
	}
	.below {
		position: absolute;
		margin-top: 39px;
		margin-left: 64.5px;
	}
</style>
