import { v4 as uuidv4 } from '../node_modules/uuid'

export class DeliveryDetails {
    constructor(page) {
        this.page = page
        this.firstNameField = page.locator('[data-qa="delivery-first-name"]')
        this.lastNameField = page.locator('[data-qa="delivery-last-name"]')
        this.streetNameField = page.locator('[data-qa="delivery-address-street"]')
        this.postNameField = page.locator('[data-qa="delivery-postcode"]')
        this.cityNameField = page.locator('[data-qa="delivery-city"]')
        this.dropCountryList = page.locator('[data-qa="country-dropdown"]')
        
    }

    fillDetails = async () => {
        await this.firstNameField.waitFor()
        await this.firstNameField.fill('firstName')
        await this.lastNameField.waitFor()
        await this.lastNameField.fill('lastName')
        await this.streetNameField.waitFor()
        await this.streetNameField.fill('streetName')
        await this.postNameField.waitFor()
        await this.postNameField.fill('01654')
        await this.cityNameField.waitFor()
        await this.cityNameField.fill('Kyiv')
        await this.dropCountryList.waitFor()
        await this.dropCountryList.selectOption('Ukraine')
        await this.page.pause()


    }
}