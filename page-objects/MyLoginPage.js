import {expect} from '@playwright/test'

export class MyLoginPage {
    constructor(page) {
        this.page = page
        this.regButton = page.locator('[data-qa="go-to-signup-button"]')
    }

    moveToSignup = async () => {
        await this.regButton.waitFor()
        await this.regButton.click()
        await expect(this.page).toHaveURL(/\/signup/)
        
        

    }
}