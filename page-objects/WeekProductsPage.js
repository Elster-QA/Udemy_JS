import { expect } from '@playwright/test'
import { WeekNavigation } from './WeekNavigation'




export class WeekProductsPage {
    constructor(page) {
        this.page = page
        this.brandsPoloButton = page.locator('a[href="/brand_products/Polo"]')
        this.mainCardsLocator = page.locator('.productinfo')
        this.continueShopButton = page.getByRole('button', { name: 'Continue Shopping' })
        this.brandsMadameButton = page.locator('a[href="/brand_products/Madame"]')

        this.viewProdCart = page.locator('.choose')
        this.prodInfo = page.locator('.product-information')
        this.inputCountProd = page.locator('#quantity')
        this.addButtonFromProdPage = page.getByRole('button', { name: ' Add to cart' })



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

    goToViewProduct = async (itemDataViewProduct) => {
        await this.viewProdCart.locator(itemDataViewProduct).waitFor()
        await this.viewProdCart.locator(itemDataViewProduct).click()

    }

    setCountItemProduct = async (index) => {
        await this.inputCountProd.waitFor()
        await this.inputCountProd.fill(index)
        await this.addButtonFromProdPage.waitFor()
        await this.addButtonFromProdPage.click()
        await this.continueShopButton.waitFor()
        await this.continueShopButton.click()
        const countBeforeAdd = parseInt (await this.inputCountProd.inputValue(), 10)
        console.warn({countBeforeAdd})
        // const countBeforeAdd = parseInt(await this.inputCountProd.inputValue(), 10)



    }









}