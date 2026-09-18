import { expect } from "@playwright/test"


export class MyPaymentPage {
    constructor(page) {
        this.page = page
        this.IFrame = page.frameLocator('[data-qa="active-discount-container"]').locator('[data-qa="discount-code"]')
        this.discounField = page.locator('[data-qa="discount-code-input"]')
        this.submitButton = page.locator('[data-qa="submit-discount-button"]')
        this.messageActivateDiscount = page.locator('[data-qa="discount-active-message"]')
        this.priceTotal = page.locator('[data-qa="total-value"]')
        this.priceAfterDiscount = page.locator('[data-qa="total-with-discount-value"]')

        this.cardOwnerInput = page.locator('[data-qa="credit-card-owner"]')
        this.cardNumberInput = page.locator('[data-qa="credit-card-number"]')
        this.validInput = page.locator('[data-qa="valid-until"]')
        this.cvcInput = page.getByPlaceholder('Credit card CVC')
        this.payButton = page.locator('[data-qa="pay-button"]')
        this.titleHeader = page.locator('.mb-6')
    }

    activeDiscount = async () => {

        await this.IFrame.waitFor()
        const discountCode = await this.IFrame.innerText()
        console.log(discountCode)
        await this.discounField.focus()
        // await this.page.keyboard.type(discountCode, {delay: 1000})//Альтернативный вариант ввода символов в поле(в поле с задержкой ввода)
        // await expect(this.discounField).toHaveValue(discountCode)
        await this.discounField.fill(discountCode)
        await expect(this.discounField).toHaveValue(discountCode)
        const totalPrice = parseInt(await this.priceTotal.innerText(), 10)//Это мой вариант,он более сокращенный, но parseInt работает только если в строке первыми идут числа напр. "465$", а если "$788", то только черерез repalce(смотри ниже)
        console.log({ totalPrice })
        expect(await this.messageActivateDiscount.isVisible()).toBe(false)//Проверка на видимость элемент. Элемент отобразился - тест идет далее, элемент не виден - тест упал
        await this.submitButton.waitFor()
        await this.submitButton.click()
        const afterPrice = await this.priceAfterDiscount.innerText()//Нижний вариант, через replace
        const onlyNumberAfterPrice = await afterPrice.replace("$", "")//Нижний вариант, через replace
        const cleanAfterPrice = parseInt(onlyNumberAfterPrice, 10)//Нижний вариант, через replace
        console.log({ cleanAfterPrice })
        await expect(this.messageActivateDiscount).toHaveText('Discount activated!')
        expect(totalPrice).toBeGreaterThan(cleanAfterPrice)

    }

    entryPaymentData = async (paymentData) => {
        await this.page.pause()
        await this.cardOwnerInput.waitFor()
        await this.cardOwnerInput.fill(paymentData.cardOwner)
        expect(await this.cardOwnerInput.inputValue()).toBe(paymentData.cardOwner)
        await this.cardNumberInput.waitFor()
        await this.cardNumberInput.fill(paymentData.cardNumber)
        expect(await this.cardNumberInput.inputValue()).toBe(paymentData.cardNumber)
        await this.validInput.waitFor()
        await this.validInput.fill(paymentData.cardValid)
        expect(await this.validInput.inputValue()).toBe(paymentData.cardValid)
        await this.cvcInput.waitFor()
        await this.cvcInput.fill(paymentData.cardCvc)
        expect(await this.cvcInput.inputValue()).toBe(paymentData.cardCvc)

    }

    completePayment = async () => {
        await this.payButton.waitFor()
        await this.payButton.click()
        await this.page.waitForURL(/\/thank-you/, { timeout: 3000 })
    }



}