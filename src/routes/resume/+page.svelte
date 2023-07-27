<script>
	import { workExperiences, workLogos } from "$lib/data/resume.js";
	import { schools, schoolLogos } from "$lib/data/resume.js";
</script>

<svelte:head>
	<title>Résumé</title>
	<meta name="description" content="Al-Ahmadgaid B. Asaad's Résumé" />
</svelte:head>

<div class="text-column">
	<h1>Background and Experience</h1><br><br>
	<div class="title-emphasis">Work</div><br>
	<table>
		<tbody>
			{#each workExperiences as work, i}
				<tr>
					<td class="logo-td">
						<a href="{ work["href"] }">
							<img src={ workLogos[i] } alt="{ work["logoAlt"] }" class="logo"/>
						</a>
					</td>
					<td>{ work["dateRange"] }: 
						{#if work["position"].length > 1 }
							(promoted from { work["position"][0] })
						{/if}
						<br>
						{#if work["position"].length > 1 }
							<b>{ work["position"].slice(-1) }</b>
						{:else}
							<b>{ work["position"] }</b>
						{/if}
						<br/>
						<span class="emphasis"> 
							<b>
								<a href="{ work["href"] }">{ work["company"] }</a>
							</b>
						</span>
						<br>{ work["address"] }<br><br>
					</td>
				</tr>
				<tr></tr>
			{/each}
		</tbody>
	</table>
	<br>
	<div class="title-emphasis">Education</div><br>
	<table>
		<tbody>
			{#each schools as school, i}
				<tr>
					<td class="logo-td">
						<a href="{ school["href"] }">
							<img src={ schoolLogos[i] } alt="{ school["logoAlt"] }" class="logo"/>
						</a>
					</td>
					<td>
						{ school["schoolYear"] }: <br>
						<b><span class="emphasis"> { school["degree"] } </span></b><br>
						<a href={ school["href"] }>
							{ school["school"] }
						</a>, 
						{ school["university"] }<br>
						{ school["address"] }<br><br>
					</td>
				</tr>
			{/each}
		<tr></tr>
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
</style>