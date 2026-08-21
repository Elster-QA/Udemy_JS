import { expect } from '@playwright/test'

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

        await specificAddButton.waitFor()
       expect (specificAddButton).toHaveText('Add to Basket')//+
        await specificAddButton.click()
       expect(specificAddButton).toHaveText('Remove from Basket')//+
        
    }

   

   

   






}