import { expect } from '@playwright/test'


export class WeekCartPage {
    constructor(page) {
        this.page = page
        this.basketcounter = page.getByRole('button', { name: '1' })
        this.emptyCartText = page.getByText('Cart is empty!')
        this.continueIfEmpty = page.getByRole('link', { name: 'here' })

        
        this.itemRowTable = this.mainRowInTable = page.locator('.table')
       
    }

    getItemCounter = async () => {
        if (await this.emptyCartText.isVisible()) {
            await this.continueIfEmpty.click()
            return 0
        }
        await this.basketcounter.waitFor()
        const getItemText = await this.basketcounter.innerText()
        console.log(getItemText)
        return parseInt(getItemText, 10)

    }

    checkItemInBasket = async (itemDataInCart) => {
        await this.itemRowTable.locator(itemDataInCart).waitFor()
        expect(await this.itemRowTable.locator(itemDataInCart).isVisible()).toBe(true)
    }

}