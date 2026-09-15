import { expect } from '@playwright/test'

export class PaymentPage {
    constructor(page) {
        this.page = page
        this.discountFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountField = page.getByRole('textbox', { name: 'Discount code' })
        
    }

    activateDiscount = async () => {

        await this.discountFrame.waitFor()
        const discountCodeInFrame = await this.discountFrame.innerText()
        console.log(discountCodeInFrame)
        await this.discountField.waitFor()
        await this.discountField.fill(discountCodeInFrame)
        await expect(this.discountField).toHaveValue(discountCodeInFrame)//Моя проверка ПРАВИЛЬНАЯ! Моя короче по символам, но суть такая же!
        await this.page.pause()
    }

}