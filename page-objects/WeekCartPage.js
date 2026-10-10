import { expect } from '@playwright/test'


export class WeekCartPage {
    constructor(page) {
        this.page = page

        this.itemRowTable = this.mainRowInTable = page.locator('.table')
        this.removeButtonInRow = page.locator('.cart_delete')
        



    }



    checkAddItemInBasket = async (itemDataInCart) => {
        await this.itemRowTable.locator(itemDataInCart).waitFor()
        expect(await this.itemRowTable.locator(itemDataInCart).isVisible()).toBe(true)
    }

    remFromBasketItem = async (itemDataOnProductsPage) => {
        await this.removeButtonInRow.locator(itemDataOnProductsPage).waitFor()
        await this.removeButtonInRow.locator(itemDataOnProductsPage).click()
    }

    checkRemItemFromBasket = async (itemDataOnProductsPage) => {
        expect(await this.itemRowTable.locator(itemDataOnProductsPage).isVisible()).toBe(false)

    }

    getCountItemInBasket = async (itemDataInCart) => {
        const valueInBasket = parseInt(await this.itemRowTable.locator(itemDataInCart).locator('.disabled').innerText(), 10)
        return valueInBasket
        
     }

}