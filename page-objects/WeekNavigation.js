import {expect} from '@playwright/test'

export class WeekNavigation {
    constructor(page) {
        this.page = page
        this.logo = page.locator('[class="logo pull-left"]')
        this.loginButton = page.getByRole('link', { name: ' Signup / Login' })
        
    }

    visit = async () => {
        await this.page.goto('https://automationexercise.com/')
        await expect(this.page).toHaveURL(/\/automationexercise/)
        await expect(this.logo).toBeVisible()
        
    }

    goToSignup = async () => {
        await this.loginButton.waitFor()
        await this.loginButton.click()
        await expect(this.page).toHaveURL(/\/login/)
        await this.page.pause()

     }

     



}