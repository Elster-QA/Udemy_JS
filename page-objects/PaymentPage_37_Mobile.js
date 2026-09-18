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

        this.cardOwnerField = page.locator('[data-qa="credit-card-owner"]')
        this.cardNumberField = page.locator('[data-qa="credit-card-number"]')
        this.cardValidField = page.locator('[data-qa="valid-until"]')
        this.cardCvcField = page.locator('[data-qa="credit-card-cvc"]')
        this.payButton = page.locator('[data-qa="pay-button"]')
    }

    activateDiscount = async () => {
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
        expect(await this.priceAfterDiscounRow.isVisible()).toBe(false)//Проверка элемента по видимости. Если элемент видет - тест идет дальше, если нет- упал.
        expect(await this.dicountMessageDone.isVisible()).toBe(false)//Проверка элемента по видимости. Если элемент видет - тест идет дальше, если нет- упал.
        await this.submitDiscountButton.waitFor()
        await this.submitDiscountButton.click()
        await expect(this.dicountMessageDone).toHaveText('Discount activated!')
        await this.priceAfterDiscounRow.waitFor()
        const priceAfter = parseInt(await this.priceAfterDiscounRow.innerText(), 10)//Это "мой") вариант, ParseInt оставляет только числа, но если числа ижут в начале строки т.е. "125$", но если так "$125", то смотри метод выше
        console.log({ priceAfter })
        expect(priceAfter).toBeLessThan(clearNumber)
        await this.page.pause()
    }

    fillPaymentDetails = async (paymentsDetails) => {

        await this.cardOwnerField.waitFor()
        await this.cardOwnerField.fill(paymentsDetails.cardOwner)
        expect(await this.cardOwnerField.inputValue()).toBe(paymentsDetails.cardOwner)

        await this.cardNumberField.waitFor()
        await this.cardNumberField.fill(paymentsDetails.cardNumber)
        expect(await this.cardNumberField.inputValue()).toBe(paymentsDetails.cardNumber)

        await this.cardValidField.waitFor()
        await this.cardValidField.fill(paymentsDetails.cardValidUntil)
        expect(await this.cardValidField.inputValue()).toBe(paymentsDetails.cardValidUntil)

        await this.cardCvcField.waitFor()
        await this.cardCvcField.fill(paymentsDetails.cardCVC)
        expect(await this.cardCvcField.inputValue()).toBe(paymentsDetails.cardCVC)

    }

    completePayment = async () => {
        await this.payButton.waitFor()
        await this.payButton.click()
        await this.page.waitForURL(/\/thank-you/, {timeout: 3000})
        
     }


}