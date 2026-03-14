<script lang="ts">
	import * as config from '$lib/data/config';
</script>

<footer>
	<div class="container footer-inner">
		<span class="arabic-text">{config.footerText}</span>
		<span class="copy">© {new Date().getFullYear()} Al-Ahmadgaid B. Asaad</span>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		padding: 32px 0;
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 12px;
	}

	.arabic-text {
		font-family: var(--font-arabic);
		font-size: 24px;
		font-weight: 600;
		color: var(--accent);
	}

	.copy {
		font-size: 13px;
		color: var(--text-3);
	}
</style>
