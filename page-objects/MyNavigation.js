import {expect} from '@playwright/test'

export class NewClass {
    
    constructor(page){
        this.page = page
        this.basket = page.locator('[data-qa="header-basket-count"]')
        this.button = page.getByRole('link', { name: 'Checkout' })
    }

    getBesket = async() =>{
        const text = await this.basket.innerText()
        console.log(text)
        return parseInt(text, 10) 
    }

toGoBas = async () => {
        await this.button.waitFor()
        this.button.click()
        await this.page.waitForURL('/basket')
        await expect(this.page).toHaveURL('/basket')

    }
    
}