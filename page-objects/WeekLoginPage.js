import { expect } from "@playwright/test"

export class WeekLoginPage {
    constructor(page) {
        this.page = page
        this.signUpField = page.locator('[data-qa="signup-name"]')
        this.mailField = page.locator('[data-qa="signup-email"]')
        this.signupButton = page.locator('[data-qa="signup-button"]')

        this.loginField = page.locator('[data-qa="login-email"]')
        this.passwordField = page.locator('[data-qa="login-password"]')
        this.loginButton = page.locator('[data-qa="login-button"]')

        this.chipLoginUser = page.getByText(/Logged in as/)

    }

    fillFieldName = async (credData) => {
        await this.signUpField.waitFor()
        await this.signUpField.fill(credData.name)


    }

    fillFieldMail = async (genNewEmail) => {
        await this.mailField.waitFor()
        await this.mailField.fill(genNewEmail)
        await this.signupButton.waitFor()
        await this.signupButton.click()
        await expect(this.page).toHaveURL(/\/signup/)



    }

    authAfterRegistry = async (genNewEmail, credData) => {

        await this.loginField.waitFor()
        await this.loginField.fill(genNewEmail)

        await this.passwordField.waitFor()
        await this.passwordField.fill(credData.password)

        await this.loginButton.waitFor()
        await this.loginButton.click()
        await expect(this.chipLoginUser).toBeVisible()
        await expect(this.chipLoginUser).toHaveText(new RegExp(credData.name))


    }




}