import { expect } from '@playwright/test'
import { WeekNavigation } from './WeekNavigation'
import { WeekCartPage } from './WeekCartPage'



export class WeekProductsPage {
    constructor(page) {
        this.page = page
        this.brandsPoloButton = page.locator('a[href="/brand_products/Polo"]')
        this.mainCardsLocator = page.locator('.productinfo')
        this.addToCardButton = page.getByRole('button', { name: ' Add to cart' })
        this.continueShopButton = page.getByRole('button', { name: 'Continue Shopping' })
        this.poloCategoryReturnButton = page.locator('a[href="/brand_products/Polo"]')


    }

    goToBrandsPolo = async () => {
        await this.brandsPoloButton.waitFor()
        await this.brandsPoloButton.click()
        await expect(this.page).toHaveURL(/\/Polo/)
    }

    addProductCardAndReturn = async (itemData) => {
        const navigation = new WeekNavigation(this.page)
        const cartPage = new WeekCartPage(this.page)
        await this.mainCardsLocator.locator(itemData).waitFor()
        await this.mainCardsLocator.locator(itemData).click()
        await this.continueShopButton.click()
        await navigation.goToBasketPage()
        await cartPage.checkItem()
        await navigation.goToProductsPage()
        await this.poloCategoryReturnButton.click()
        await expect(this.page).toHaveURL(/\/Polo/)


        






        //  if (await this.emptyCartText.isVisible()){await this.continueIfEmpty.click()}

        
    }










}