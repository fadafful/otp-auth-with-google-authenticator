import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/2FA/);
});

test('refresh link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the refresh link.
  await page.getByRole('link', { name: 'Refresh' }).click();

  // Expects page to reload.
  await expect(page.getByRole('heading', { name: '2FA Demo' })).toBeVisible();
});

test('has image', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect page to have an image.
  await page.locator('img').evaluate(async (img: HTMLImageElement) => {
    if (img.complete)
      return;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });
  });
});
