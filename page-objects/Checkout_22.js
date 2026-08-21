import { expect } from '@playwright/test'

export class Checkout {

    constructor(page) {
        this.page = page
        this.basketCards = page.locator('[data-qa="basket-card"]')
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
        this.basketItemRemoveButton = page.locator('[data-qa="basket-card-remove-item"]')
        this.checkOutButton = page.locator('[data-qa="continue-to-checkout"]')
    }

    removeCheapestProduct = async () => {
        await this.basketCards.first().waitFor()
        const itemBasketBeforeRemoval = await this.basketCards.count()//Считаем количество карточек на странице
        await this.basketItemPrice.first().waitFor()
        const allPricesTexst = await this.basketItemPrice.allInnerTexts()//Возвращает текст со ВСЕХ элементов с данным локатором(Используем allInnerTexts(), когда нам нужны тексты сразу всех найденных элементов.)       

        const justNumbers = allPricesTexst.map((elements) => {//В "allPricesTexst" вернулся массив строк.С помощую "map" проходит/берет каждый "elements"(строку) массива  и конвертирует в массив чисел
            const withoutDollarsSigh = elements.replace("$", "")//.replace из каждого числа массива убирает знак "$" и ставит пустоту ""
            // console.log({ withoutDollarsSigh })
            return parseInt(withoutDollarsSigh, 10)
        })
        // console.log({ justNumbers })

        const smallestPrice = Math.min(...justNumbers)// Math.min-возвращает в перем.smallestPrice минимальное значение из justNumbers. (...justNumbers) -Три точки разворачивают массив в список чисел.Например:[10, 5, 99]->10, 5, 99
        const smallestPriceIdx = justNumbers.indexOf(smallestPrice)// indexOf- определяет последовательность или порядковый номер минимального числа в массиве
        // await this.page.pause()
        const specificRemoveButton = this.basketItemRemoveButton.nth(smallestPriceIdx)
        await specificRemoveButton.waitFor()
        await specificRemoveButton.click()
        await expect(this.basketCards).toHaveCount(itemBasketBeforeRemoval - 1)
        // await this.page.pause()
    }


    continueToCheckout = async () => { 
        // await this.page.pause()
        await this.checkOutButton.waitFor()
        await this.checkOutButton.click()
        await expect(this.page).toHaveURL(/\/login/,{timeout:3000})///\/login/-это регулярное выражение используется для частичного совпадения в тексте//{timeout:3000}-применение таймаута к конкретному элементу
    }







}

