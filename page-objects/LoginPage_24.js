import { expect } from '@playwright/test'

export class LoginPage {

    constructor(page) {
        this.page = page
        this.registerButton = page.getByRole('button', { name: 'Register' })

    }

    moveToSignup = async () => {
        await this.registerButton.waitFor()
        await this.registerButton.click()
        await expect(this.page).toHaveURL(/\/signup/)
    }





}