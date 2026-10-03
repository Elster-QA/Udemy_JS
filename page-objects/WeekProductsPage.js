import { expect } from '@playwright/test'
import { WeekNavigation } from './WeekNavigation'




export class WeekProductsPage {
    constructor(page) {
        this.page = page
        this.brandsPoloButton = page.locator('a[href="/brand_products/Polo"]')
        this.mainCardsLocator = page.locator('.productinfo')
        this.continueShopButton = page.getByRole('button', { name: 'Continue Shopping' })
        this.brandsMadameButton = page.locator('a[href="/brand_products/Madame"]')


    }

    goToBrandsPolo = async () => {
        await this.brandsPoloButton.waitFor()
        await this.brandsPoloButton.click()
        await expect(this.page).toHaveURL(/\/Polo/)
    }

    addProductCard = async (itemData) => {
        await this.mainCardsLocator.locator(itemData).waitFor()
        await this.mainCardsLocator.locator(itemData).click()
        await this.continueShopButton.click()
    }


    goToBrandsMadame = async () => {
        await this.brandsMadameButton.waitFor()
        await this.brandsMadameButton.click()
        const navigation = new WeekNavigation(this.page)
        await navigation.ifVisibleAdClose()
        await expect(this.page).toHaveURL(/\/Madame/)

    }

    








}