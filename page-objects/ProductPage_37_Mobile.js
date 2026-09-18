import { expect } from '@playwright/test'
import { Navigation } from './Navigation_26'

const isDesktopViewport = (page) => {
    const size = page.viewportSize()
   return size.width >=600
}

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
        await specificAddButton.waitFor() 
        expect(specificAddButton).toHaveText('Add to Basket')
        const navigation = new Navigation(this.page)      
        //only desktop viewport
        if (isDesktopViewport(this.page)) {
            const basketCounterBeforeAdding = await navigation.getBasketCount()
        }
        
        await specificAddButton.click()
        expect(specificAddButton).toHaveText('Remove from Basket')//+
        //only desktop viewport
        if (isDesktopViewport(this.page)) {
            const basketCounterAfterAdding = await navigation.getBasketCount()
            expect(basketCounterAfterAdding).toBeGreaterThan(basketCounterBeforeAdding)
        }



    }

    sortByCheapest = async () => {//+
        await this.sortDropdown.waitFor()
        await this.productTitle.first().waitFor()
        const productTitlesBeforeSort = await this.productTitle.allInnerTexts()
        await this.sortDropdown.selectOption('price-asc')//selectOption-работа с DropDownList в аргументе указываем один из пунктов выпад. списка
        const productTitlesAfterSort = await this.productTitle.allInnerTexts()
        expect(productTitlesBeforeSort).not.toEqual(productTitlesAfterSort)
        // await this.page.pause()
    }









}