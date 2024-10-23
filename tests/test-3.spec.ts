import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://test.arco.sa/Common/auth/login');
await page.getByPlaceholder('User Name').click();
await page.getByPlaceholder('User Name').fill('dfsdfsddf');
await page.getByPlaceholder('User Name').press('Enter');
await page.getByPlaceholder('Password').click();
await page.getByPlaceholder('Password').fill('sdfsdfsfd');
await page.getByRole('button', { name: ' Login' }).click();
});