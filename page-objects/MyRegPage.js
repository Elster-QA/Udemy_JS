import { expect } from "@playwright/test"



export class MyRegPage {
    constructor(page) {
        this.page = page
        this.emailField = page.getByRole('textbox', { name: 'E-Mail' })
        this.passField = page.getByRole('textbox', { name: 'Password' })
        this.regButton = page.getByRole('button', { name: 'Register' })
        this.title = page.locator('[class="mb-6 font-bold text-xl"]')

    }

    entryDataToRegForm = async (email, password) => {
        await this.emailField.waitFor()
        await this.emailField.fill(email)
        await expect(this.emailField).toHaveValue(email)
        await this.passField.waitFor()
        await this.passField.fill(password)
        await expect(this.passField).toHaveValue(password)
        await this.regButton.waitFor()
        await this.regButton.click()
        await expect(this.page).toHaveURL(/\/delivery-details/)
        await expect(this.title).toHaveText('Delivery details')
        await this.page.pause()

    }




}