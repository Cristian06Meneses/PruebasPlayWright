import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('heading', { name: 'Popular Make' }).click();
  await page.getByRole('heading', { name: 'List of all registered models.' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Lamborghini', exact: true }).nth(2).click();
  await page.getByRole('link', { name: 'Lamborghini Veneno' }).click();
  await page.getByRole('heading', { name: 'Votes:' }).click();
  await page.locator('my-model div').filter({ hasText: 'Votes:' }).nth(4).click();
  await page.getByText('You need to be logged in to').click();
});