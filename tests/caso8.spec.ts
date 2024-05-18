import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').fill('cris123');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345678aB!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Guilia Quadrifoglio', exact: true }).click();
  await page.getByRole('button', { name: 'Vote!' }).click();
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Zonda', exact: true }).click();
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Diablo', exact: true }).click();
  await page.getByRole('button', { name: 'Vote!' }).click();
});