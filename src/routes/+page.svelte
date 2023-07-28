<script>
	import Projects from './Projects.svelte';
	import WelcomeMessage from './WelcomeMessage.svelte';
	import Contact from './Contact.svelte';
	import welcome from '$lib/images/alasaad.jpg';
	import alasaadLogo from '$lib/images/alasaad-logo.png';
</script>

<svelte:head>
	<title>Al-Ahmadgaid B. Asaad</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="icon" href={alasaadLogo} />
	<link rel="masked-icon" href={alasaadLogo} />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={welcome} alt="Welcome" />
			</picture>
		</span>

		Welcome!
	</h1>
	<WelcomeMessage />
</section>
<section class="projects">
	<Projects />
</section>
<br /><br /><br />
<section>
	<Contact />
</section>
<br /><br />

<style>
	.projects::before {
		content: '';
		position: fixed;
		top: 85%;
		left: 54%;
		width: 30%;
		height: 30%;
		background: linear-gradient(#f00, #f0f);
		clip-path: circle(20% at 50% 50%);
		z-index: -1;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	h1 {
		width: 100%;
	}
	.welcome {
		display: block;
		position: relative;
		padding: 0 0 50% 0;
		margin-bottom: 5%;
	}
	.welcome img {
		position: absolute;
		max-width: 100%;
		max-height: 100%;
		min-width: 30%;
		min-height: 30%;
		border-radius: 30px;
		top: 0;
		left: 25%;
		display: block;
	}
</style>
