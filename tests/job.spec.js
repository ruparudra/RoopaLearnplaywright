
import { test, expect } from '@playwright/test';

test('verify job title', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})