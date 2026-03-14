<script lang="ts">
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import alasaadLogo from '$lib/images/alasaad-logo.png';
	import * as config from '$lib/data/config';
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
	<link rel="icon" href={alasaadLogo} />
</svelte:head>

<!-- Hero -->
<section id="about" class="hero">
	<div class="container hero-inner">
		<div class="hero-text">
			<p class="label reveal">Assalamu 'Alaikum</p>
			<h1 class="hero-name reveal reveal-d1">Al-Ahmadgaid B. Asaad</h1>
			<p class="hero-role reveal reveal-d2">Statistician · Data Scientist · Researcher</p>
			<p class="hero-bio reveal reveal-d3">
				Manager of Advanced Analytics at <a href="https://www.jnj.com/">Johnson &amp; Johnson</a>
				and Senior Lecturer at
				<a href="https://upd.edu.ph/">University of the Philippines Diliman</a>. I work at the
				intersection of statistics, machine learning, and humanities, building thoughtfully designed
				tools while publishing research in both data science and Islamic studies.
			</p>
			<div class="hero-actions reveal reveal-d4">
				<a
					href="https://www.linkedin.com/in/al-ahmadgaid-asaad-68613a44/"
					class="pill pill-accent"
					target="_blank"
					rel="noopener">LinkedIn</a
				>
				<a href="https://github.com/alstat" class="pill" target="_blank" rel="noopener">GitHub</a>
				<a href="mailto:alahmadgaid+web@gmail.com" class="pill">Email</a>
			</div>
		</div>

		<div class="hero-photo reveal reveal-d2">
			<enhanced:img
				src="$lib/images/alasaad.jpg"
				alt="Al-Ahmadgaid Asaad"
				sizes="(min-width: 900px) 380px, 80vw"
			/>
		</div>
	</div>
</section>

<!-- Projects -->
<section id="projects">
	<Projects />
</section>

<!-- Contact -->
<section id="contact">
	<Contact />
</section>

<style>
	/* Hero */
	.hero {
		min-height: calc(100svh - var(--nav-h));
		display: flex;
		align-items: center;
		padding: clamp(60px, 10vw, 120px) 0;
	}

	.hero-inner {
		display: flex;
		align-items: center;
		gap: clamp(48px, 7vw, 100px);
		width: 100%;
	}

	.hero-text {
		flex: 1;
		min-width: 0;
	}

	.hero-name {
		font-size: clamp(40px, 7vw, 82px);
		font-weight: 700;
		letter-spacing: -0.04em;
		line-height: 1.04;
		color: var(--text);
		margin-bottom: 18px;
	}

	.hero-role {
		font-family: var(--font-label);
		font-size: clamp(12px, 1.6vw, 16px);
		font-weight: 400;
		letter-spacing: 0.1em;
		color: var(--text-2);
		margin-bottom: 24px;
		text-transform: uppercase;
	}

	.hero-bio {
		font-size: clamp(15px, 1.4vw, 17px);
		color: var(--text-2);
		max-width: 480px;
		line-height: 1.7;
		margin-bottom: 36px;
	}
	.hero-bio a {
		color: var(--accent);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	/* Photo */
	.hero-photo {
		flex-shrink: 0;
		width: clamp(200px, 28vw, 360px);
		aspect-ratio: 3/4;
		border-radius: var(--r-lg);
		overflow: hidden;
		box-shadow: var(--card-shadow);
	}
	.hero-photo :global(img),
	.hero-photo :global(picture) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (max-width: 720px) {
		.hero-inner {
			flex-direction: column-reverse;
			text-align: center;
		}
		.hero-bio {
			max-width: 100%;
		}
		.hero-actions {
			justify-content: center;
		}
		.hero-photo {
			width: min(260px, 75vw);
			aspect-ratio: 1/1;
			border-radius: 50%;
		}
		.hero-photo :global(img),
		.hero-photo :global(picture) {
			object-position: center 20%;
		}
	}
</style>
