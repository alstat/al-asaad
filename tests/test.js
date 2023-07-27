import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/papers');
	await expect(page.getByRole('heading', { name: 'Papers this app' })).toBeVisible();
});
