import {test, expect} from '@playwright/test';

test('Basket', async ({page}) =>{
await page.goto('http://localhost:2221/')
 
await expect(page).toHaveURL('http://localhost:2221/')
});