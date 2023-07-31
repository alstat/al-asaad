<script lang="ts">
	import { skillsData } from "$lib/data/skills.ts";
	let skills = Object.keys(skillsData) as Array<keyof typeof skillsData>;
</script>

{#each skills as skill, i}
	<div class="skills-header">
		{ skillsData[skill]["label"] }
	</div>
	<div class="container">
		{#each skillsData[skill]["data"] as data, j}
            {#if j < 3}
                <div class="skill-container">
                    <div
                        class="gauge"
                        role="progressbar"
                        [aria-valuenow]="65"
                        [aria-valuemin]="0"
                        [aria-valuemax]="100"
                        style="--value:{ data["percent"] }"
                    />
                    <div class="skill">
                        { data["skill"] }
                    </div>
                </div>
            {/if}
		{/each}
	</div>
    <div class="container">
		{#each skillsData[skill]["data"].slice(3,) as data, j}
            <div class="skill-container">
                <div
                    class="gauge"
                    role="progressbar"
                    aria-valuenow=65
                    [aria-valuemin]=0
                    [aria-valuemax]=100
                    style="--value:{ data["percent"] }"
                />
                <div class="skill">
                    { data["skill"] }
                </div>
            </div>
		{/each}
	</div>
    <br><br>
{/each}

<style>
	.skills-header {
		text-align: center;
		font-weight: bold;
		margin-bottom: 20px;
		color: var(--color-theme-0);
	}
    .container {
        display: flex;
        justify-content: center;
        align-content: center;
    }
	.skill-container {
		display: inline-block;
		text-align: center;
        padding: 20px;
	}
	.gauge {
		display: block;
	}
	.skill {
		display: block;
	}
	@keyframes growProgressBar {
		0%,
		33% {
			--pgPercentage: 0;
		}
		100% {
			--pgPercentage: var(--value);
		}
	}

	@property --pgPercentage {
		syntax: "<number>";
		inherits: false;
		initial-value: 0;
	}

	div[role="progressbar"] {
		--size: 5rem;
		--fg: var(--color-theme-1);
		--bg: var(--color-bg-0);
		--pgPercentage: var(--value);
		animation: growProgressBar 3s 1 forwards;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: radial-gradient(
				closest-side,
				var(--color-bg-1) 80%,
				transparent 0 99.9%,
				var(--color-bg-0) 0
			),
			conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
		font-family: Helvetica, Arial, sans-serif;
		font-size: calc(var(--size) / 5);
		color: var(--fg);
	}

	div[role="progressbar"]::before {
		counter-reset: percentage var(--value);
		content: counter(percentage) "%";
	}
</style>
