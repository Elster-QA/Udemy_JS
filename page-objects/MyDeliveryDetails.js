import {expect} from '@playwright/test'



export class MyDeliveryDetails {
    constructor(page) {
        this.page = page
        this.first = page.locator('[data-qa="delivery-first-name"]')
        this.last = page.locator('[data-qa="delivery-last-name"]')
        this.street = page.locator('[data-qa="delivery-address-street"]')
        this.post = page.locator('[data-qa="delivery-postcode"]')
        this.city = page.locator('[data-qa="delivery-city"]')
        this.country = page.locator('[data-qa="country-dropdown"]')
        
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

}