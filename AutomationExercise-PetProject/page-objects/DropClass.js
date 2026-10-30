import { expect } from '@playwright/test'

export class DropClass {
    constructor(page) {
        this.page = page
        this.sortFilter = page.locator('[class="sort-dropdown"]')
        this.prodCard = page.locator('[data-qa="product-card"]')
        this.priceCard = page.locator('[datatype="product-price"]')
        this.nameCard = this.prodCard.locator('[data-qa="product-title"]')
    }

    visit = async () => {
        await this.page.goto('/')
        await expect(this.page).toHaveURL('http://localhost:2221/')
        this.getAllNameBeforeProdDef = await this.nameCard.allInnerTexts()
        return this.getAllNameBeforeProdDef
    }

    sortByASC = async () => {
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

    sortByDESC = async () => {
        await this.sortFilter.waitFor()
        await this.sortFilter.selectOption('price-desc')
        const intValueFirst = parseInt(await this.priceCard.first().innerText(), 10)
        const intValueLast = parseInt(await this.priceCard.last().innerText(), 10)
        console.log({ intValueFirst })
        console.log({ intValueLast })
        expect(intValueLast).toBeLessThan(intValueFirst)

    }

    sortByDEF = async () => {
        await this.sortFilter.waitFor()
        await this.sortFilter.selectOption('default')
        const getAllNameAfterSortDef = await this.nameCard.allInnerTexts()
        expect(this.getAllNameBeforeProdDef).toEqual(getAllNameAfterSortDef)

    }

    justPrintunionMass = async () => {
        const allNameBefore = await this.nameCard.allInnerTexts()
        await this.sortFilter.selectOption('price-desc')
        const allNameAfter = await this.nameCard.allInnerTexts()
        const unionNames = [...allNameBefore, ...allNameAfter]
        console.log(unionNames)
    }

    addProd = async () => {

        await this.prodCard.first().waitFor()
        await this.prodCard.first().click()


    }

}