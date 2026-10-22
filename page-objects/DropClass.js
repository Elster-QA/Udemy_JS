import { expect } from '@playwright/test'

export class DropClass {
    constructor(page) {
        this.page = page
        this.sortFilter = page.locator('[class="sort-dropdown"]')
        this.prodCard = page.locator('[data-qa="product-card"]')
        this.priceCard = page.locator('[datatype="product-price"]')
    }

    visit = async () => {
        this.page.goto('/')
        await expect(this.page).toHaveURL('http://localhost:2221/')
    }

    sortBy = async () => {
        await this.sortFilter.waitFor()
        await this.sortFilter.selectOption('price-asc')
        const getPriceFirstProd = await this.priceCard.first().innerText()
        const getPriceLastProd = await this.priceCard.last().innerText()
        const intValueFirst = parseInt(getPriceFirstProd, 10)
        const intValueLast = parseInt(getPriceLastProd, 10)
        console.log({ intValueFirst })
        console.log({ intValueLast })
        expect(intValueLast).toBeGreaterThan(intValueFirst)






    }

    addProd = async () => {

        await this.prodCard.first().waitFor()
        await this.prodCard.first().click()


    }

}