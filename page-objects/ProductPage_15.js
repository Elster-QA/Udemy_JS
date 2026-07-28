import { expect } from '@playwright/test'

export class ProductsPage {
    constructor(page) {
        this.page = page
        this.addButtons = page.locator('[data-qa="product-button"]')
        this.basketCounter =  page.locator('[data-qa="header-basket-count"]')
        
               
    }

    visit = async () => {
        await this.page.goto('/')
    }

    getBasketCount =async()=>{//Метод возвращает значения корзины
        await this.basketCounter.waitFor()//Дожидаемся пока элемент отобразится на странице
        const text = await this.basketCounter.innerText() //.innerText()- Возвращает "строку"!!! из элемента
        //console.log(text)//Вывод переменной "text" в консоль
        return parseInt(text, 10)//Преобразовывает "строку"(тип данных)! в скобках(в аргументе) сначало(первым) указываем "text"-это что мы будем преобразовывать, а потом "10"- указываем систему измерения в какую будем преодразовывать
        

    }



    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)//Создали переменную для "красоты" кода 

        await specificAddButton.waitFor()
       expect (specificAddButton).toHaveText('Add to Basket')//+

       const basketCounterBeforeAdding = await this.getBasketCount()//Возвращаем количество товаров в корзине перед кликом. Если мы вызываем метод в классе(того же класса), то необх. указывать "this" 
        await specificAddButton.click()
        const basketCounterAfterAdding = await this.getBasketCount()//Возвращаем количество товаров в корзине после кликом.
        expect(specificAddButton).toHaveText('Remove from Basket')//+
       expect(basketCounterAfterAdding).toBeGreaterThan(basketCounterBeforeAdding)
        
      
    }

    
   

   

   






}