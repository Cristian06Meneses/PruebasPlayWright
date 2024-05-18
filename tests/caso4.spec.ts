import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').fill('cris123');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345678aB!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('crist');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('crist');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('calle2');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('123456');
  await page.getByLabel('Hobby').selectOption('Other');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
});