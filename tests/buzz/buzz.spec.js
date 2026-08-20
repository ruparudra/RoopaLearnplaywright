
import { test, expect } from '@playwright/test';
import codedata from "../../testdata/login.json"

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill(codedata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(codedata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('b');
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill('hi good morning');
  await page.getByRole('button', { name: 'Post', exact: true }).click();
});