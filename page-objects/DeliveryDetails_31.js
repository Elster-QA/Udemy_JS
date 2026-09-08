import { expect } from '@playwright/test'

export class DeliveryDetails {
    constructor(page) {
        this.page = page
        this.firstNameField = page.locator('[data-qa="delivery-first-name"]')
        this.lastNameField = page.locator('[data-qa="delivery-last-name"]')
        this.streetNameField = page.locator('[data-qa="delivery-address-street"]')
        this.postNameField = page.locator('[data-qa="delivery-postcode"]')
        this.cityNameField = page.locator('[data-qa="delivery-city"]')
        this.dropCountryList = page.locator('[data-qa="country-dropdown"]')
        this.saveAdressButton = page.locator('[data-qa="save-address-button"]')
        this.savedAdressContainer = page.locator('[data-qa="saved-address-container"]')

        this.firstNameSaved = page.locator('[data-qa="saved-address-firstName"]')
        this.lastNameSaved = page.locator('[data-qa="saved-address-lastName"]')
        this.streetNameSaved = page.locator('[data-qa="saved-address-street"]')
        this.postNameSaved = page.locator('[data-qa="saved-address-postcode"]')
        this.citySaved = page.locator('[data-qa="saved-address-city"]')
        this.countrySaved = page.locator('[data-qa="saved-address-country"]')

        this.paymentButton = page.locator('[data-qa="continue-to-payment-button"]')


    }

    fillDetails = async (userAdress) => {
        await this.firstNameField.waitFor()
        await this.firstNameField.fill(userAdress.firstName)
        await this.lastNameField.waitFor()
        await this.lastNameField.fill(userAdress.lastName)
        await this.streetNameField.waitFor()
        await this.streetNameField.fill(userAdress.street)
        await this.postNameField.waitFor()
        await this.postNameField.fill(userAdress.post)
        await this.cityNameField.waitFor()
        await this.cityNameField.fill(userAdress.city)
        await this.dropCountryList.waitFor()
        await this.dropCountryList.selectOption(userAdress.country)


    }

    saveDetails = async () => {

        const beforeClick = await this.savedAdressContainer.count()
        await this.saveAdressButton.waitFor()
        await this.saveAdressButton.click()
        await this.savedAdressContainer.waitFor()
        await expect(this.savedAdressContainer).toHaveCount(beforeClick + 1)


        await this.firstNameSaved.waitFor()
        expect(await this.firstNameSaved.first().innerText()).toBe(await this.firstNameField.inputValue())
        await this.lastNameSaved.waitFor()
        expect(await this.lastNameSaved.first().innerText()).toBe(await this.lastNameField.inputValue())
        await this.streetNameSaved.waitFor()
        expect(await this.streetNameSaved.first().innerText()).toBe(await this.streetNameField.inputValue())
        await this.postNameSaved.waitFor()
        expect(await this.postNameSaved.first().innerText()).toBe(await this.postNameField.inputValue())
        await this.citySaved.waitFor()
        expect(await this.citySaved.first().innerText()).toBe(await this.cityNameField.inputValue())
        await this.countrySaved.waitFor()
        expect(await this.countrySaved.first().innerText()).toBe(await this.dropCountryList.inputValue())
await this.page.pause()
    }

    continueToPayment = async () => {
        await this.paymentButton.waitFor()
        await this.paymentButton.click()
        await this.page.waitForURL(/\/payment/, { timeout: 3000 })
        await expect(this.page).toHaveURL(/\/payment/)

    }

}