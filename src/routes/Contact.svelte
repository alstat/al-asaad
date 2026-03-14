<div class="section">
	<div class="container">
		<p class="label reveal">Get in touch</p>
		<h2 class="section-title reveal reveal-d1">Let's connect.</h2>
		<p class="sub reveal reveal-d2">
			Whether it's a research collaboration, data science project, or just to say hello.
		</p>

		<div class="links reveal reveal-d3">
			<a href="mailto:alahmadgaid+web@gmail.com" class="link-card">
				<div class="icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="4" width="20" height="16" rx="3" />
						<path d="m2 7 10 7 10-7" />
					</svg>
				</div>
				<div class="link-text">
					<span class="link-title">Email</span>
					<span class="link-sub">alahmadgaid+web@gmail.com</span>
				</div>
				<span class="link-arrow">→</span>
			</a>

			<a
				href="https://www.linkedin.com/in/al-ahmadgaid-asaad-68613a44/"
				target="_blank"
				rel="noopener"
				class="link-card"
			>
				<div class="icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
						<rect x="2" y="9" width="4" height="12" />
						<circle cx="4" cy="4" r="2" />
					</svg>
				</div>
				<div class="link-text">
					<span class="link-title">LinkedIn</span>
					<span class="link-sub">al-ahmadgaid-asaad-68613a44</span>
				</div>
				<span class="link-arrow">→</span>
			</a>

			<a href="https://github.com/alstat" target="_blank" rel="noopener" class="link-card">
				<div class="icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
					</svg>
				</div>
				<div class="link-text">
					<span class="link-title">GitHub</span>
					<span class="link-sub">@alstat</span>
				</div>
				<span class="link-arrow">→</span>
			</a>
		</div>
	</div>
</div>

<style>
	.section {
		padding: clamp(80px, 12vw, 140px) 0;
	}

	.sub {
		font-size: 17px;
		color: var(--text-2);
		max-width: 460px;
		margin-top: 14px;
		margin-bottom: clamp(40px, 6vw, 64px);
		line-height: 1.65;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 10px;
		max-width: 560px;
	}

	.link-card {
		display: flex;
		align-items: center;
		gap: 18px;
		padding: 20px 24px;
		border-radius: var(--r-lg);
		border: 1px solid var(--border);
		background: var(--surface);
		color: var(--text);
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s, transform 0.2s;
	}
	.link-card:hover {
		background: var(--surface-2);
		border-color: var(--border-2);
		transform: translateX(4px);
		text-decoration: none;
	}

	.icon {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: var(--accent-dim);
		color: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.link-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.link-title {
		font-size: 15px;
		font-weight: 600;
	}
	.link-sub {
		font-size: 13px;
		color: var(--text-2);
	}

	.link-arrow {
		color: var(--text-3);
		font-size: 16px;
		transition: color 0.2s, transform 0.2s;
	}
	.link-card:hover .link-arrow {
		color: var(--accent);
		transform: translateX(3px);
	}
</style>
