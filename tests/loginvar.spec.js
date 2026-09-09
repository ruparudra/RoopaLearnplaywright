
import { test, expect } from '@playwright/test';

test('verify the valide username and password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  let usernametext=await page.locator('//p[@class="oxd-text oxd-text--p"][1]').textContent()
  console.log(usernametext)
  let username=usernametext.split(" ")[2]
  console.log(username)
 let passwordtext=await page.locator('//p[@class="oxd-text oxd-text--p"][2]').textContent()
 console.log(passwordtext)
 let password=passwordtext.split(" ")[2]
 console.log(password)
  
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Username' }).fill('A');
  // await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  // await page.getByRole('textbox', { name: 'Username' }).fill(username);
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill(password);
  // 
});