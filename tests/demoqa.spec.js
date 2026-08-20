
import { test, expect } from '@playwright/test';
import qadata from '../testdata/login.json';
const { faker } = require('@faker-js/faker');

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('roopa h');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('ruparudra2003@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('verify the email', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(qadata.fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('ruparudra2003@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('verify the spec file', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(qadata.fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  let randomchars = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('ruparudra2003@gmail.com+' + randomchars);
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('verify the fakerjs', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('ruparudra2003@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('verify the enviranment', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('ruparudra2003@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});