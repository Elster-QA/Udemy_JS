import { expect } from '@playwright/test'

export class Checkout {

    constructor(page) {
        this.page = page
        this.basketCards = page.locator('[data-qa="basket-card"]')
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
        this.basketItemRemoveButton = page.locator('data-qa="basket-card-remove-item"')

    }

    removeCheapestProduct = async () => {
        await this.basketCards.first().waitFor()
        await this.basketItemPrice.first().waitFor()
        const allPricesTexst = await this.basketItemPrice.allInnerTexts()//Возвращает текст со ВСЕХ элементов с данным локатором(Используем allInnerTexts(), когда нам нужны тексты сразу всех найденных элементов.)       
        

        const justNumbers = allPricesTexst.map((elements) => {//В "allPricesTexst" вернулся массив строк.С помощую "map" проходит/берет каждый "elements"(строку) массива и парсит в число
            const withoutDollarsSigh = elements.replace("$", "")//.replace из каждого числа массива убирает знак "$" и ставит пустоту ""
            console.log({ withoutDollarsSigh })

            return parseInt(withoutDollarsSigh, 10)
           
            
        })
        console.log({ justNumbers })

        // await this.page.pause()


    }









}

