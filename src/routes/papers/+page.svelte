<script lang="ts">
	import { papers } from '$lib/data/papers';
	import type { Paper, Thesis } from '$lib/data/papers';

	let theses: Thesis[];
	let nonTheses: Paper[];
	theses = papers.filter((object: Paper) => {
		return object['type'] === 'thesis';
	}) as Thesis[];
	nonTheses = papers.filter((object: Paper) => {
		return object['type'] !== 'thesis';
	});

	let data: { [key: string]: Paper[] } = {};
	let i: number;
	for (i = 0; i < nonTheses.length; ++i) {
		data[nonTheses[i]['year']] = [];
	}
	for (i = 0; i < nonTheses.length; ++i) {
		data[nonTheses[i]['year']].push(nonTheses[i]);
	}
	let years = Object.keys(data).reverse();
</script>

<svelte:head>
	<title>Papers</title>
	<meta name="description" content="Journal & Conference Papers" />
</svelte:head>

<div class="text-column">
	<h1>Theses, Conference, & Journal Publications</h1>
	<br /><br />
	<div class="title-emphasis">Theses</div>
	<ul>
		{#each theses as thesis, i}
			<li>
				<u>{thesis['author']}</u>
				({thesis['year']}).
				{thesis['title']}.
				<span class="emphasize">{thesis['publisher']}</span>. (<a href={thesis['href']}>read</a>)
				{thesis['application']}
			</li>
			<br />
		{/each}
	</ul>
	{#each years as year, i}
		<div class="title-emphasis">{year}</div>
		<ul>
			{#each data[year] as paper, i}
				<li>
					{#if paper['author'].length > 1}
						{#each paper['author'] as author, k}
							{#if author.includes('A.A.B.')}
								<u>{author}</u>
							{:else}
								{author}
							{/if}
							{#if k < paper['author'].length - 2}
								,&nbsp;
							{:else if k === paper['author'].length - 2}
								{#if paper['author'].length === 2}
									&&nbsp;
								{:else}
									, &&nbsp;
								{/if}
							{/if}
						{/each}
					{:else}
						<u>{paper['author']}</u>
					{/if}
					({paper['year']}).
					{paper['title']}.
					<span class="emphasize">
						{#if paper['type'] === 'journal' && 'journal' in paper}
							<i>{paper['journal']}</i>
						{:else if 'proceeding' in paper}
							In <i>{paper['proceeding']}</i>,
						{/if}
					</span>
					{#if paper['type'] === 'journal' && 'issue' in paper}
						<b>{paper['issue']}</b>,
						{paper['pages']}, doi: {paper['doi']}
					{/if}
					{#if paper['type'] === 'conference' && 'pages' in paper && 'address' in paper && 'publisher' in paper}
						{#if paper['pages'] !== undefined}
							{paper['pages']},&nbsp;
						{/if}
						{paper['address']}.
						{#if paper['publisher'] !== undefined}
							{paper['publisher']}
						{/if}
					{/if}
					(<a href={paper['href']}>read</a>)
					{paper['application']}<br /><br />
				</li>
			{/each}
		</ul>
	{/each}
</div>

<style>
	ul {
		padding: 0;
	}
	li {
		line-height: 170%;
		list-style-type: none;
	}
	.emphasize {
		color: #ffae00;
	}
</style>
