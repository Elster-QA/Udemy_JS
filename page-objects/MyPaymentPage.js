export class MyPaymentPage {
    constructor(page) {
        this.page = page
        this.IFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
    }

    activeDiscount = async () => {
        await this.IFrame.waitFor()
    await this.page.pause()
     }


}