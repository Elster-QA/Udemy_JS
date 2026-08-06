import { expect } from '@playwright/test'
import { NewClass } from "./MyNavigation"


export class OldClass {

    constructor(page) {
        this.page = page
        this.Button = page.locator('[data-qa="product-button"]')
        
    }
    
    vis = async () => {
        await this.page.goto('/')
    }

    addProd = async (index) => {
        const checkButton = expect(this.Button.nth(index))
        const newClass = new NewClass(this.page)


        await this.Button.nth(index).waitFor()

        const beforeClick = await newClass.getBesket()
        await checkButton.toHaveText('Add to Basket')
        await this.Button.nth(index).click()
        await checkButton.toHaveText('Remove from Basket')
        const afterClick = await newClass.getBesket()
        expect(afterClick).toBeGreaterThan(beforeClick)


    }


    




}
