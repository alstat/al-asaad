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
			<p class="hero-path reveal">~/portfolio/about.md</p>
			<p class="label reveal">printf "Assalamu 'Alaikum"</p>
			<h1 class="hero-name reveal reveal-d1">Al-Ahmadgaid B. Asaad</h1>
			<p class="hero-role reveal reveal-d2">
				<span>role:</span> Statistician / Data Scientist / Researcher
			</p>
			<p class="hero-bio reveal reveal-d3">
				Manager of Advanced Analytics at <a href="https://www.jnj.com/">Johnson &amp; Johnson</a>. I
				work at the intersection of statistics, machine learning, and humanities, building
				thoughtfully designed tools while publishing research in both data science and Islamic
				studies.
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
			<div class="window-bar">
				<span class="window-dots"><i></i><i></i><i></i></span>
				<span>profile.img</span>
				<span>100%</span>
			</div>
			<div class="photo-frame">
				<enhanced:img
					src="../../static/alasaad-new.jpg"
					alt="Al-Ahmadgaid Asaad"
					sizes="(min-width: 900px) 380px, 80vw"
				/>
			</div>
			<div class="photo-status"><span>STATUS: <b>AVAILABLE</b></span><span>PH / UTC+8</span></div>
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
	.hero::before {
		content: 'root@alasaad:~';
		position: absolute;
		left: 12px;
		top: 50%;
		transform: rotate(-90deg) translateX(-50%);
		transform-origin: left top;
		font-size: 10px;
		letter-spacing: 0.12em;
		color: var(--text-3);
	}
	.hero-path {
		font-size: 11px;
		letter-spacing: 0.08em;
		color: var(--text-3);
		margin-bottom: 24px;
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
		letter-spacing: -0.07em;
		line-height: 1.04;
		color: var(--text);
		margin-bottom: 18px;
	}
	.hero-name::before {
		content: '> ';
		color: var(--accent);
	}

	.hero-role {
		font-family: var(--font-label);
		font-size: clamp(12px, 1.6vw, 16px);
		font-weight: 400;
		letter-spacing: 0.03em;
		color: var(--text-2);
		margin-bottom: 24px;
	}
	.hero-role span {
		color: var(--accent-2);
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
		background: var(--surface);
		border-radius: var(--r-lg);
		overflow: hidden;
		border: 1px solid var(--border-2);
		box-shadow: var(--card-shadow);
	}
	.window-bar,
	.photo-status {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		padding: 10px 12px;
		font-size: 9px;
		letter-spacing: 0.08em;
		color: var(--text-3);
		border-bottom: 1px solid var(--border);
	}
	.window-dots {
		display: flex;
		gap: 5px;
	}
	.window-dots i {
		width: 6px;
		height: 6px;
		border: 1px solid var(--text-3);
		border-radius: 50%;
	}
	.window-dots i:first-child {
		background: var(--accent-2);
		border-color: var(--accent-2);
	}
	.photo-frame {
		position: relative;
		aspect-ratio: 3/4;
		overflow: hidden;
		margin: 10px;
		border: 1px solid var(--border);
	}
	.photo-frame::after {
		content: '';
		position: absolute;
		inset: 0;
		box-shadow: inset 0 0 60px rgba(6, 12, 9, 0.24);
		pointer-events: none;
	}
	.hero-photo :global(img),
	.hero-photo :global(picture) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.photo-status {
		border-top: 1px solid var(--border);
		border-bottom: 0;
	}
	.photo-status b {
		color: var(--accent);
		font-weight: 500;
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
		}
		.photo-frame {
			aspect-ratio: 1/1;
		}
		.hero-photo :global(img),
		.hero-photo :global(picture) {
			object-position: center 20%;
		}
	}
	@media (max-width: 1100px) {
		.hero::before {
			display: none;
		}
	}
</style>
