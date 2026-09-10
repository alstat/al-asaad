<script lang="ts">
	import { skillsData } from '$lib/data/skills';
	import type { SkillsData } from '$lib/data/skills';
	let skills = Object.keys(skillsData) as Array<keyof SkillsData>;
</script>

<div class="skills-wrap">
	{#each skills as skill}
		<div class="skill-group reveal">
			<h3 class="group-title">{skillsData[skill].label}</h3>
			<div class="skill-list">
				{#each skillsData[skill].data as item}
					<div class="skill-row">
						<span class="skill-name">{item.skill}</span>
						<div class="dots" aria-label="{item.percent}% proficiency">
							{#each { length: 5 } as _, i}
								<div class="dot" class:filled={i < Math.round(item.percent / 20)}></div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.skills-wrap {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 40px;
	}

	.skill-group {
		border: 1px solid var(--border);
		background: var(--surface);
		padding: 24px;
		box-shadow: var(--card-shadow);
	}

	.skill-group::before {
		content: './skills/';
		display: block;
		font-size: 9px;
		letter-spacing: 0.08em;
		color: var(--accent);
		margin-bottom: 8px;
	}

	.group-title {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-2);
		margin-bottom: 20px;
	}

	.skill-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.skill-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}
	.skill-row::before {
		content: '>';
		color: var(--text-3);
		font-size: 10px;
	}

	.skill-name {
		font-size: 14px;
		font-weight: 500;
		color: var(--text);
		flex: 1;
	}

	.dots {
		display: flex;
		gap: 5px;
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 0;
		background: var(--border-2);
		transition: background 0.3s;
	}

	.dot.filled {
		background: var(--accent);
	}
</style>
