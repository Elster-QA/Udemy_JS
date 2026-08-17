import { expect } from '@playwright/test'
import { Navigation } from '../page-objects/Navigation_20'

export class ProductsPage {
    constructor(page) {
        this.page = page
        this.addButtons = page.locator('[data-qa="product-button"]')
        this.sortDropdown = page.locator('[data-qa="sort-dropdown"]')//+
        this.productTitle = page.locator('[data-qa="product-title"]')

    }

    visit = async () => {
        await this.page.goto('/')
    }


    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)//Создали переменную для "красоты" кода 
        const navigation = new Navigation(this.page)

        await specificAddButton.waitFor()
        expect(specificAddButton).toHaveText('Add to Basket')
        const basketCounterBeforeAdding = await navigation.getBasketCount()
        await specificAddButton.click()
        const basketCounterAfterAdding = await navigation.getBasketCount()
        expect(basketCounterAfterAdding).toBeGreaterThan(basketCounterBeforeAdding)
        expect(specificAddButton).toHaveText('Remove from Basket')//+

    }

    sortByCheapest = async () => {//+
        await this.page.pause()
        await this.sortDropdown.waitFor()
        await this.productTitle.first().waitFor()
        const productTitlesBeforeSort = await this.productTitle.allInnerTexts()
        console.log(productTitlesBeforeSort)

        await this.sortDropdown.selectOption('price-asc')//selectOption-работа с DropDownList в аргументе указываем один из пунктов выпад. списка
        const productTitlesAfterSort = await this.productTitle.allInnerTexts()
        console.log(productTitlesAfterSort)
         expect(productTitlesBeforeSort).not.toEqual(productTitlesAfterSort)
        await this.page.pause()
    }









}