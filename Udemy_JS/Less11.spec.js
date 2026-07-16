import {test, expect} from '@playwright/test';

test('Basket', async ({page}) =>{
await page.goto('/')
//THIS LESSON IT'S Intoduction for NEXT BLOCK


const addToBasketButton = page.locator('[data-qa="product-button"]')//.first()//В 8 ом уроке тут был getByRole, но он был заменен потому как getByRole использует ИМЯ элемента, а оно изменяется при клике, поэтому используме CSS-селектор(он при клике не изменный) 
const basketCounter = page.locator('[data-qa="header-basket-count"]')//переменная счетчика корзины
const checkOutLink = page.locator('[data-qa="desktop-nav-link"]').nth(2)//+Обнаружение кнопки "Checkout". .nth(2)-порядковый номер элеиента на странице 
const CheckEl = page.locator('[data-qa="basket-card"]')//+Карточка товара

//await addToBasketButton.waitFor()//.waitFor()- в д.с. ждет пока элемент указаный више(кнопка с названием 'Add to Basket' ) отобразится на странице
//await expect(basketCounter).toHaveText('0')//проверяем что счетчик корзины имеет знач. "0"
await expect(addToBasketButton.nth(0)).toHaveText('Add to Basket')//проверяем что данная кнопка иммет название "Add to Basket"
 await addToBasketButton.nth(0).click()//+
await expect(addToBasketButton.nth(0)).toHaveText('Remove from Basket')//+

await expect(addToBasketButton.nth(1)).toHaveText('Add to Basket')//+
await addToBasketButton.nth(1).click()//+
await expect(addToBasketButton.nth(1)).toHaveText('Remove from Basket')//+

await expect(addToBasketButton.nth(2)).toHaveText('Add to Basket')//+
await addToBasketButton.nth(2).click()//+
await expect(addToBasketButton.nth(2)).toHaveText('Remove from Basket')//+

 await expect(basketCounter).toHaveText('3') //+

await checkOutLink.waitFor()//+
await checkOutLink.click()//+Клик по кнопке "Checkout"
await expect(page).toHaveURL('/basket')//+Проверка урлы
await expect(CheckEl.nth(0)).toBeVisible()//+Проверка что "CheckEl"(карточка товара) отображается на странице
await expect(CheckEl.nth(1)).toBeVisible()//+
await expect(CheckEl.nth(2)).toBeVisible()//+




 

})