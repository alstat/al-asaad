<script>
	import { papers } from "$lib/data/papers.js"
	
	let theses;
	let nonTheses;
	theses = papers.filter((object) => {
		return object["type"] === "thesis"
	})
	nonTheses = papers.filter((object) => {
		return object["type"] !== "thesis"
	})
	let data = {}; let i;
	for (i = 0; i < nonTheses.length; ++i) {
		data[nonTheses[i]["year"]] = []
	}
	for (i = 0; i < nonTheses.length; ++i) {
		data[nonTheses[i]["year"]].push(nonTheses[i])
	}
	let years = Object.keys(data).reverse();
</script>

<svelte:head>
	<title>Papers</title>
	<meta name="description" content="Journal & Conference Papers" />
</svelte:head>

<div class="text-column">
	<h1>Theses, Conference, & Journal Publications</h1><br><br>
	<div class="title-emphasis">Theses</div>
	<ul>
		{#each theses as thesis, i}
			<li>
				<u>{ thesis["author"] }</u> 
				({ thesis["year"] }). 
				{ thesis["title"] }. 
				<span class="emphasize">{ thesis["publisher"] }</span>. 
				(<a href="{ thesis["href"] }">read</a>)
				{ thesis["application"] }
			</li><br>
		{/each}
	</ul>
	{#each years as year, i}
		<div class="title-emphasis">{ year }</div>
		<ul>
			{#each data[year] as paper, i}
				<li>
					{#if paper["author"].length > 1}
						{#each paper["author"] as author, i}
							{#if author.includes("A.-A.B.")}
								<u>{ author }</u>
							{:else}
								{ author }
							{/if},&nbsp;
						{/each}
					{:else}
						<u>{ paper["author"] }</u>
					{/if}
					({ paper["year"] }). 
					{ paper["title"] }. 
					<span class="emphasize">
						{#if paper["type"] === "journal"}
							<i>{ paper["journal"] }</i>
						{:else}
							In <i>{ paper["proceeding"] }</i>, 
						{/if}
					</span>
					{#if paper["type"] === "journal"}
						<b>{ paper["issue"] }</b>, 
						{ paper["pages"] },
						doi: { paper["doi"] }
					{/if}
					{#if paper["type"] === "conference"}
						{#if paper["pages"] !== undefined}
							{ paper["pages"] },&nbsp;
						{/if}
						{ paper["address"] }.
						{#if paper["publisher"] !== undefined}
							{ paper["publisher"] }
						{/if}
					{/if}
					(<a href="{ paper["href"] }">read</a>)
					{ paper["application"] }<br><br>
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
