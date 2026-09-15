import {expect} from '@playwright/test'

export class WeekNavigation {
    constructor(page) {
        this.page = page
        this.logo = page.locator('[class="logo pull-left"]')
        this.loginButton = page.getByRole('link', { name: ' Signup / Login' })

        this.productPageButton = page.getByRole('link', { name: ' Products' })
        this.adCloseButtonProductsPage = page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' })
        
    }

    visit = async () => {
        await this.page.goto('https://automationexercise.com/')
        await expect(this.page).toHaveURL(/\/automationexercise/)
        await expect(this.logo).toBeVisible()
        
    }

    goToSignupPage = async () => {
        await this.loginButton.waitFor()
        await this.loginButton.click()
        await expect(this.page).toHaveURL(/\/login/)
        

     }

     goToProductsPage = async () => {
        await this.productPageButton.waitFor()
        await this.productPageButton.click()
        if (await this.adCloseButtonProductsPage.isVisible()){await this.adCloseButtonProductsPage.click()}//Это метода "если"), конструкция проаста: если мы видим елемент (await this.adCloseButtonProductsPage.isVisible()), то делаем клик по нему ({await this.adCloseButtonProductsPage.click()})
        await expect(this.page).toHaveURL(/\/products/)
     }
     



}