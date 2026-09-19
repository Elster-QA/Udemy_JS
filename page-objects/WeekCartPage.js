import { expect } from '@playwright/test'

export class WeekCartPage {
    constructor(page) {
        this.page = page
        this.basketcounter = page.getByRole('button', { name: '1' })
        this.emptyCartText = page.getByText('Cart is empty!')
        this.continueIfEmpty = page.getByRole('link', { name: 'here' })

        this.itemRow = page.getByRole('row', { name: 'Product Image Premium Polo T-' })
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
        await this.itemRow.waitFor()
        expect(await this.itemRow.isVisible()).toBe(true)
    }

}