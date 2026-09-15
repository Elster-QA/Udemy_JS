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

    }

    activeDiscount = async () => {
        await this.page.pause()
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
        expect(await this.messageActivateDiscount.isVisible()).toBe(false)
        await this.submitButton.waitFor()
        await this.submitButton.click()
        const afterPrice = await this.priceAfterDiscount.innerText()//Нижний вариант, через replace
        const onlyNumberAfterPrice = await afterPrice.replace("$", "")//Нижний вариант, через replace
        const cleanAfterPrice = parseInt(onlyNumberAfterPrice, 10)//Нижний вариант, через replace
        console.log({ cleanAfterPrice })
        await expect(this.messageActivateDiscount).toHaveText('Discount activated!')
        expect(totalPrice).toBeGreaterThan(cleanAfterPrice)




    }



}