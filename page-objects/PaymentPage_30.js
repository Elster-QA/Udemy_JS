import { expect } from '@playwright/test'

export class PaymentPage {
    constructor(page) {
        this.page = page
        this.discountFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
       
    }

    activateDiscount = async () => {
        await this.discountFrame.waitFor()
       
    }

}