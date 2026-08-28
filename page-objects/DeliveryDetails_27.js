
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
await this.page.pause()
        await this.saveAdressButton.waitFor()
        await this.saveAdressButton.click()



    }
}