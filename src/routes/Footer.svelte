<script lang="ts">
	import * as config from '$lib/data/config';
</script>

<footer>
	<div class="container footer-inner">
		<span class="arabic-text">{config.footerText}</span>
		<span class="system">[ process completed successfully ]</span>
		<span class="copy">© {new Date().getFullYear()} Al-Ahmadgaid B. Asaad</span>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		padding: 26px 0;
		background: var(--surface);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 12px;
	}

	.arabic-text {
		font-family: var(--font-quran);
		font-size: 18px;
		font-weight: 400;
		color: var(--accent);
	}

	.copy {
		font-size: 13px;
		color: var(--text-3);
	}
	.system {
		font-size: 10px;
		color: var(--accent);
		letter-spacing: 0.06em;
	}

	@media (max-width: 620px) {
		.footer-inner {
			justify-content: center;
			text-align: center;
		}
		.system {
			order: 3;
			width: 100%;
		}
	}
</style>
