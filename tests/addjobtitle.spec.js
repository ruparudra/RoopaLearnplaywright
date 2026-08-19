
import { test, expect } from '@playwright/test';
import data from "../testdata/login.json"
const { faker } = require('@faker-js/faker');

test('verify the addjobtitle', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  let randomchars = (Math.random() + 1).toString(36).substring(7)
  await page.getByRole('textbox').nth(1).fill(faker.string.alphanumeric);
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('write automation script');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill('note the scripts');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('.orangehrm-horizontal-padding')).toBeVisible();
});