import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('cris');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('cris');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('cris');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('cris');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('cris');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('cris');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('cris');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('cris');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('cris');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('cris');
  await page.getByRole('button', { name: 'Register' }).click();
});