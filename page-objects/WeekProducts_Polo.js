import { expect } from '@playwright/test'

export class WeekProducts_Polo {
    constructor(page) {
        this.page = page
        this.brandsPoloButton = page.getByRole('link', { name: 'Polo' })
        this.mainCardsLocator = page.locator('.product-image-wrapper')
        this.cardProduct = this.mainCardsLocator.getByRole('link', { name: 'View Product' })
        this.addToCardButton = page.getByRole('button', { name: ' Add to cart' })
        this.continueShopButton = page.getByRole('button', { name: 'Continue Shopping' })
        this.poloCategoryReturnButton = page.locator('a[href="/brand_products/Polo"]')

    
    }

    goToCatPolo = async () => {
        await this.brandsPoloButton.waitFor()
        await this.brandsPoloButton.click()
        await expect(this.page).toHaveURL(/\/Polo/)
    }

    addProductCardAndReturn =async(index)=>{
        await this.cardProduct.nth(index).click()
        await this.addToCardButton.click()
        await this.continueShopButton.click()
        await  this.poloCategoryReturnButton.click()
        await expect(this.page).toHaveURL(/\/Polo/)
        }


        
        




    
    
}