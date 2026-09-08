import { expect } from '@playwright/test'



export class MyDeliveryDetails {
    constructor(page) {
        this.page = page
        this.first = page.locator('[data-qa="delivery-first-name"]')
        this.last = page.locator('[data-qa="delivery-last-name"]')
        this.street = page.locator('[data-qa="delivery-address-street"]')
        this.post = page.locator('[data-qa="delivery-postcode"]')
        this.city = page.locator('[data-qa="delivery-city"]')
        this.country = page.locator('[data-qa="country-dropdown"]')
        this.saveButton = page.getByRole('button', { name: 'Save address for next time' })
        this.adressSaveBox = page.locator('[data-qa="saved-address-container"]')

        this.firstBox = page.locator('[data-qa="saved-address-firstName"]')
        this.lastBox = page.locator('[data-qa="saved-address-lastName"]')
        this.streetBox = page.locator('[data-qa="saved-address-street"]')
        this.postBox = page.locator('[data-qa="saved-address-postcode"]')
        this.cityBox = page.locator('[data-qa="saved-address-city"]')
        this.countryBox = page.locator('[data-qa="saved-address-country"]')

        this.paymentButton = page.locator('[data-qa="continue-to-payment-button"]')


    }

    enrtyDataToDelivery = async (userAdress) => {
        await this.first.waitFor()
        await this.first.fill(userAdress.firstName)
        await expect(this.first).toHaveValue(userAdress.firstName)

        await this.last.waitFor()
        await this.last.fill(userAdress.lastName)
        await expect(this.last).toHaveValue(userAdress.lastName)

        await this.street.waitFor()
        await this.street.fill(userAdress.street)
        await expect(this.street).toHaveValue(userAdress.street)

        await this.post.waitFor()
        await this.post.fill(userAdress.post)
        await expect(this.post).toHaveValue(userAdress.post)

        await this.city.waitFor()
        await this.city.fill(userAdress.city)
        await expect(this.city).toHaveValue(userAdress.city)

        await this.country.waitFor()
        await this.country.selectOption(userAdress.country)
        await expect(this.country).toHaveValue('Albania')

    }

    checkSaveAdress = async () => {
        await this.page.pause()
        const adressBox = await this.adressSaveBox.count()
        this.saveButton.waitFor()
        this.saveButton.click()
        await expect(this.adressSaveBox).toHaveCount(adressBox + 1)

        await this.firstBox.waitFor()
        expect(await this.firstBox.first().innerText()).toBe(await this.first.inputValue())
        await this.lastBox.waitFor()
        expect(await this.lastBox.first().innerText()).toBe(await this.last.inputValue())
        await this.streetBox.waitFor()
        expect(await this.streetBox.first().innerText()).toBe(await this.street.inputValue())
        await this.postBox.waitFor()
        expect(await this.postBox.first().innerText()).toBe(await this.post.inputValue())
        await this.cityBox.waitFor()
        expect(await this.cityBox.first().innerText()).toBe(await this.city.inputValue())
        await this.countryBox.waitFor()
        expect(await this.countryBox.first().innerText()).toBe(await this.country.inputValue())

    }

     continueToPayment = async () => {
        await this.page.pause()
        await this.paymentButton.waitFor()
        await this.paymentButton.click()
        await this.page.waitForURL(/\/payment/, { timeout:3000 })

        



    }





}