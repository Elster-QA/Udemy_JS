import {test, expect} from '@playwright/test';

test('Basket', async ({page}) =>{
await page.goto('http://localhost:2221/')



const addToBasketButton = page.locator('[data-qa="product-button"]').first()//В 8 ом уроке тут был getByRole, но он был заменен потому как getByRole использует ИМЯ элемента, а оно изменяется при клике, поэтому используме CSS-селектор(он при клике не изменный) 
const basketCounter = page.locator('[data-qa="header-basket-count"]')//переменная счетчика корзины
await addToBasketButton.waitFor()//.waitFor()- в д.с. ждет пока элемент указаный више(кнопка с названием 'Add to Basket' ) отобразится на странице
await expect(basketCounter).toHaveText('0')
await expect(addToBasketButton).toHaveText('Add to Basket')
await addToBasketButton.click()// Если в строке есть методы которые возвращают Промис, то в этой же строке(в самомо начале) указываем await

await expect(addToBasketButton).toHaveText('Remove from Basket')

await expect(basketCounter).toHaveText('1') 



 
 

});