import { expect } from '@playwright/test'
import { Navigation } from '../page-objects/Navigation_20'

export class ProductsPage {
    constructor(page) {
        this.page = page
        this.addButtons = page.locator('[data-qa="product-button"]')
        
    }

    visit = async () => {
        await this.page.goto('/')
    }


    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)//Создали переменную для "красоты" кода 
        const navigation = new Navigation(this.page)


        await specificAddButton.waitFor()
        expect(specificAddButton).toHaveText('Add to Basket')//+
        const basketCounterBeforeAdding = await navigation.getBasketCount()
        await specificAddButton.click()
        const basketCounterAfterAdding = await navigation.getBasketCount()
        expect(basketCounterAfterAdding).toBeGreaterThan(basketCounterBeforeAdding)
        expect(specificAddButton).toHaveText('Remove from Basket')//+



    }



    









}