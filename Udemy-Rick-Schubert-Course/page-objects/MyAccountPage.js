import { expect } from "@playwright/test"

export class MyAccountPage {
    constructor(page) {
        this.page = page
        this.headerText = page.getByRole('heading', { name: 'Your addresses' })
    }
    visit = async () => {
        await this.page.goto('/my-account')

    }

    checkHeader = async () => {
        expect(await this.headerText.isVisible()).toBe(true)//await this.this.headerText.waitFor()
     }


}