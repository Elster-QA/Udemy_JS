import { expect } from '@playwright/test'

export class WeekCartPage {
    constructor(page) {
        this.page = page
        this.basketcounter = page.getByRole('button', { name: '1' })
        this.emptyCartText = page.getByText('Cart is empty!')
        this.continueIfEmpty = page.getByRole('link', { name: 'here' })

        this.mainRowInTable = page.locator('.table').locator('[id="product-30"]')
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

    checkItem = async () => {
        await this.mainRowInTable.waitFor()
        expect(await this.mainRowInTable.isVisible()).toBe(true)
    }

}