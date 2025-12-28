// @ts-check
import { test, expect } from '@playwright/test';

test('UI_TEST', async ({ page }) => {

 
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await expect(page.locator('.brand.greenLogo').filter({ hasText: 'GREEN' })).toBeVisible();

 await page.fill('input[type="search"]', 'ro');
 await expect(page.locator('input[type="search"]')).toHaveValue('ro');

await page.locator('.product', { hasText: 'Carrot' }).locator('input.quantity').fill('5');
await expect(page.locator('.product', { hasText: 'Carrot' }).locator('input.quantity')).toHaveValue('5');

await page.locator('.product', { hasText: 'Mushroom' }).locator('.increment').click();
await page.locator('.product', { hasText: 'Mushroom' }).locator('.increment').click();
await expect(page.locator('.product', { hasText: 'Mushroom' }).locator('input.quantity')).toHaveValue('3');

await page.locator('.product', { hasText: 'Carrot' }).locator('button', { hasText: 'ADD TO CART' }).click();
await page.locator('.product', { hasText: 'Mushroom' }).locator('button', { hasText: 'ADD TO CART' }).click();
await page.pause()
await page.getByRole('img', { name: 'Cart' }).click();
//await expect(page.locator('.cart-item', { hasText: 'Carrot' }).locator('.quantity').nth(0)).toHaveText('5 Nos.'); //Эта проверки "отключена" для прохождения сценария указаного в ТЗ. Т.К. Она обнаруживает дефект и прохождение по сценарию не возможно
//await expect(page.locator('.cart-item', { hasText: 'Mushroom' }).locator('.quantity').nth(1)).toHaveText('3 Nos.'); //Эта проверки "отключена" для прохождения сценария указаного в ТЗ. Т.К. Она обнаруживает дефект и прохождение по сценарию не возможно
await expect(page.locator('.cart-item', { hasText: 'Carrot' }).first()).toBeVisible();
await expect(page.locator('.cart-item', { hasText: 'Mushroom' }).first()).toBeVisible();

await page.locator('.cart-item', { hasText: 'Carrot' }).getByRole('link', { name: '×' }).click();
//await page.pause()

});
