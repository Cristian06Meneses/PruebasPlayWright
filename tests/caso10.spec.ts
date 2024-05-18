import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').fill('cris123');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345678aB!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByText('»').click();
  await page.getByRole('link', { name: 'Huayra', exact: true }).click();
  await page.getByText('620').click();
  await page.getByRole('button', { name: 'Vote!' }).click();
  await page.getByText('621').click();
});