import { expect } from '@playwright/test'

export class PaymentPage {
    constructor(page) {
        this.page = page
        this.discountFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountField = page.getByRole('textbox', { name: 'Discount code' })
        this.submitDiscountButton = page.locator('[data-qa="submit-discount-button"]')
        this.dicountDone = page.locator('[class="discount-active-message text-emerald-500"]')
    }

    activateDiscount = async () => {

        await this.discountFrame.waitFor()
        const discountCodeInFrame = await this.discountFrame.innerText()
        console.log(discountCodeInFrame)
        await this.discountField.waitFor()
        await this.discountField.fill(discountCodeInFrame)

        await this.submitDiscountButton.waitFor()
        await this.submitDiscountButton.click()
        await expect(this.dicountDone).toHaveText('Discount activated!')
    }

}