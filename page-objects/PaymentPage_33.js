import { expect } from '@playwright/test'

export class PaymentPage {
    constructor(page) {
        this.page = page
        this.discountFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discountField = page.getByRole('textbox', { name: 'Discount code' })
        this.submitDiscountButton = page.locator('[data-qa="submit-discount-button"]')
        this.dicountMessageDone = page.locator('[class="discount-active-message text-emerald-500"]')

        this.priceTotalRow = page.locator('[data-qa="total-value"]')
        this.priceAfterDiscounRow = page.locator('[data-qa="total-with-discount-value"]')
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
        await this.priceTotalRow.waitFor()
        const totalPrice = await this.priceTotalRow.innerText()
        const onlyNumberTotalPrice = await totalPrice.replace("$", "")
        const clearNumber = parseInt(onlyNumberTotalPrice, 10)
        console.log({ clearNumber })
        await this.submitDiscountButton.waitFor()
        await this.submitDiscountButton.click()
        await expect(this.dicountMessageDone).toHaveText('Discount activated!')

        await this.priceAfterDiscounRow.waitFor()
        const priceAfter = parseInt(await this.priceAfterDiscounRow.innerText(), 10)//Это "мой") вариант, ParseInt оставляет только числа, но если числа ижут в начале строки т.е. "125$", но если так "$125", то смотри метод выше
        console.log({ priceAfter })
        expect(priceAfter).toBeLessThan(clearNumber)




    }



}