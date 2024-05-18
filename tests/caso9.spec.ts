import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').fill('cris123');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345678aB!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('my-home').getByRole('link').nth(2).click();
  await page.getByText('»').click();
  await page.getByRole('link', { name: 'Delta', exact: true }).click();
  await page.getByLabel('Your Comment (optional)').click();
  await page.getByLabel('Your Comment (optional)').fill('hola');
  await page.getByRole('button', { name: 'Vote!' }).click();
});