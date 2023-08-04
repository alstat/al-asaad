<script lang="ts">
	import * as config from '$lib/data/config';
</script>

<footer>
	<p class="footer-arabic"><br />{config.footerText}</p>
</footer>

<style>
	.footer-arabic {
		font-family: 'El Messiri', sans-serif;
		background: linear-gradient(to left, #003591 0%, #7e0094 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
