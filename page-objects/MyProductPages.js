import { expect } from '@playwright/test'
import { MyNavigation } from "./MyNavigation"


export class MyProductPages {

    constructor(page) {
        this.page = page
        this.Button = page.locator('[data-qa="product-button"]')
        
    }
    
    vis = async () => {
        await this.page.goto('/')
    }

    addProd = async (index) => {
        const checkButton = expect(this.Button.nth(index))
        const MyNav = new MyNavigation(this.page)


        await this.Button.nth(index).waitFor()

        const beforeClick = await MyNav.getBesket()
        await checkButton.toHaveText('Add to Basket')
        await this.Button.nth(index).click()
        await checkButton.toHaveText('Remove from Basket')
        const afterClick = await MyNav.getBesket()
        expect(afterClick).toBeGreaterThan(beforeClick)


    }


    




}
