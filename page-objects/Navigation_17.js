import {expect} from '@playwright/test'

export class Navigation {
    constructor(page) {
        this.page = page
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
        this.checkoutLink = page.getByRole('link', { name: 'Checkout' })

    }

    getBasketCount = async () => {//Метод возвращает значения счетчика корзины
        await this.basketCounter.waitFor()//Дожидаемся пока элемент отобразится на странице
        const text = await this.basketCounter.innerText() //.innerText()- Возвращает "строку"!!! из элемента
        //console.log(text)//Вывод переменной "text" в консоль
        return parseInt(text, 10)//Преобразовывает "строку"(тип данных)! в скобках(в аргументе) сначало(первым) указываем "text"-это что мы будем преобразовывать, а потом "10"- указываем систему измерения в какую будем преодразовывать


    }

    goToCheckout = async () =>{
        await this.checkoutLink.waitFor()
        await this.checkoutLink.click()
        await this.page.waitForURL('/basket')
        await expect(this.page).toHaveURL('/basket')
    }


}


