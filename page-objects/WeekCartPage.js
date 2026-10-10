import { expect } from '@playwright/test'


export class WeekCartPage {
    constructor(page) {
        this.page = page

        this.itemRowTable = this.mainRowInTable = page.locator('.table')
        this.removeButtonInRow = page.locator('.cart_delete')
        // this.countfield = page.locator('.cart_quantity').locator('.disabled')



    }



    checkAddItemInBasket = async (itemDataInCart) => {
        await this.itemRowTable.locator(itemDataInCart).waitFor()
        expect(await this.itemRowTable.locator(itemDataInCart).isVisible()).toBe(true)
    }

    remFromBasketItem = async (itemData) => {
        await this.removeButtonInRow.locator(itemData).waitFor()
        await this.removeButtonInRow.locator(itemData).click()
    }

    checkRemItemFromBasket = async (itemData) => {
        expect(await this.itemRowTable.locator(itemData).isVisible()).toBe(false)

    }

    getCountItemInBasket = async (itemDataInCart) => {
        const valueInBasket = parseInt(await this.itemRowTable.locator(itemDataInCart).locator('.disabled').innerText(), 10)
        return valueInBasket
        
     }

}