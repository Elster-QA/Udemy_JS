// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:2221/');
await expect(page).toHaveURL('http://localhost:2221/');
  // Expect a title "to contain" a substring.  
await page.getByRole('link', { name: 'My Account' }).click();
await expect(page.getByText('Login').nth(0)).toBeVisible();

//await expect(page.getByText('Регистрация')).toBeVisible();

//await page.locator('a[href="/sell-on-prom?source_id=banner.b.main"]').click();
//  await page.getByRole('link', { name: 'Почати продавати' }).first().click();

// await expect(page.getByText('Регистрация')).toBeVisible();
});

//test('get started link', async ({ page }) => {
  //await page.goto('https://playwright.dev/');

  // Click the get started link.
 // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//});
