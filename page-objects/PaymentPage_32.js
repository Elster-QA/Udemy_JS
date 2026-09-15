import { expect } from '@playwright/test'

export class PaymentPage {
    constructor(page) {
        this.page = page
        this.discountFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountField = page.getByRole('textbox', { name: 'Discount code' })
      
    }

    activateDiscount = async () => {
    await this.page.pause()
        await this.discountFrame.waitFor()
        const discountCodeInFrame = await this.discountFrame.innerText()
        console.log(discountCodeInFrame)
        await this.discountField.waitFor()
        await this.discountField.fill(discountCodeInFrame)
        await expect(this.discountField).toHaveValue(discountCodeInFrame)//Использовался в предыдущем уроке, в этом новый вариант ввода символов в поле(в поле с задержкой ввода)
        // await this.discountField.focus()
        // await this.page.keyboard.type(discountCodeInFrame, {delay:1000})//Это вариант ввода значения в поле(поле с задержкой получения значений) с клавиатуры
        // await expect(this.discountField).toHaveValue(discountCodeInFrame)


        
    }

}