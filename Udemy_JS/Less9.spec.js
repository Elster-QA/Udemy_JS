import {test, expect} from '@playwright/test';

test('Basket', async ({page}) =>{
await page.goto('http://localhost:2221/')


const addToBasketButton = page.getByRole('button', { name: 'Add to Basket' }).first() // Если в строке есть методы которые возвращают локатор=(НЕ возвращают Промис), то в этой же строке(в самомо начале) НЕ указываем await
await addToBasketButton.waitFor()//.waitFor()- в д.с. ждет пока элемент указаный више(кнопка с названием 'Add to Basket' ) отобразится на странице
await addToBasketButton.click()// Если в строке есть методы которые возвращают Промис, то в этой же строке(в самомо начале) указываем await


 
 



 
 

});