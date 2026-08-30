import { expect } from "@playwright/test"

export class WeekLoginPage {
    constructor(page) {
        this.page = page
        this.loginField = page.locator('[data-qa="signup-name"]')
        this.mailField = page.locator('[data-qa="signup-email"]')
        this.signupButton = page.locator('[data-qa="signup-button"]')
        
    }

    fillFieldName = async (credData) => {
        await this.loginField.waitFor()
        await this.loginField.fill(credData.name)


    }

    fillFieldMail = async (emailField) => {

        await this.mailField.waitFor()
        await this.mailField.fill(emailField)
        await this.signupButton.waitFor()
        await this.signupButton.click()
        await expect(this.page).toHaveURL(/\/signup/)
        
        

    }

    
}