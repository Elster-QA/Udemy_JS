import { expect } from "@playwright/test"

export class WeekSignupPage {
    constructor(page) {
        this.page = page
        this.maleRadioButton = page.locator('[id="id_gender1"]')
        this.passField = page.locator('[data-qa="password"]')
        this.dayDropList = page.locator('[data-qa="days"]')
        this.monthDropList = page.locator('[data-qa="months"]')
        this.yearDropList = page.locator('[data-qa="years"]')
        this.checkBoxOne = page.locator('[name="newsletter"]')
        this.checkBoxTwo = page.locator('[name="optin"]')

        this.firstNameField = page.locator('[data-qa="first_name"]')
        this.lastNameField = page.locator('[data-qa="last_name"]')
        this.companyNameField = page.locator('[data-qa="company"]')
        this.adressField = page.locator('[data-qa="address"]')
        this.adress2Field = page.locator('[data-qa="address2"]')
        this.countryDropDownList = page.locator('[data-qa="country"]')
        this.stateField = page.locator('[data-qa="state"]')
        this.cityField = page.locator('[data-qa="city"]')
        this.zipCodeField = page.locator('[data-qa="zipcode"]')
        this.mobileNumberField = page.locator('[data-qa="mobile_number"]')
        this.createAccButton = page.locator('[data-qa="create-account"]')
        this.titleAccess = page.locator('[data-qa="account-created"]')
        this.continueButton = page.locator('[data-qa="continue-button"]')

        this.chipLoginUser = page.getByText(/Logged in as/)
        this.logOutButton = page.getByRole('link', { name: ' Logout' })
    }

    entryDataRegistry = async (credData) => {
        await this.maleRadioButton.waitFor()
        await this.maleRadioButton.click()
        await this.passField.waitFor()
        await this.passField.fill(credData.password)

        await this.dayDropList.waitFor()
        await this.dayDropList.selectOption('5')
        await this.monthDropList.waitFor()
        await this.monthDropList.selectOption('5')
        await this.yearDropList.waitFor()
        await this.yearDropList.selectOption('1987')

        await this.checkBoxOne.click()
        await this.checkBoxTwo.click()


    }

    entryDataAdressInfo = async (adressData, credData) => {
        await this.firstNameField.waitFor()
        await this.firstNameField.fill(adressData.firstName)
        await this.lastNameField.waitFor()
        await this.lastNameField.fill(adressData.lastName)
        await this.companyNameField.waitFor()
        await this.companyNameField.fill(adressData.companyName)
        await this.adressField.waitFor()
        await this.adressField.fill(adressData.adress.join(', '))//С помощую "join(', ')" в аргумент передаются все значения из массива "adress: ['Gogol str.', 'p.o.Box 321', 'PeaceWorld'],"
        await this.adress2Field.waitFor()
        await this.adress2Field.fill(adressData.adress2.join(', '))
        await this.countryDropDownList.waitFor()
        await this.countryDropDownList.selectOption(adressData.countryName)
        await this.stateField.waitFor()
        await this.stateField.fill(adressData.stateName)
        await this.cityField.waitFor()
        await this.cityField.fill(adressData.cityName)
        await this.zipCodeField.waitFor()
        await this.zipCodeField.fill(adressData.zipNumber)
        await this.mobileNumberField.waitFor()
        await this.mobileNumberField.fill(adressData.mobileNumber)

        await this.createAccButton.waitFor()
        await this.createAccButton.click()

        await expect(this.page).toHaveURL(/\/account_created/)
        await expect(this.titleAccess).toHaveText('Account Created!')


        await this.continueButton.waitFor()
        await this.continueButton.click()

        await expect(this.chipLoginUser).toBeVisible()
        await expect(this.chipLoginUser).toHaveText(new RegExp(credData.name))// new RegExp(credData.name) — превращает значение credData.name в регулярное выражение.new RegExp(credData.name) - используется как регулярка для credData.name (аргумента и значения) 


    }

    logOutAction = async () => {
        await this.logOutButton.waitFor()
        await this.logOutButton.click()
        await expect(this.page).toHaveURL(/\/login/)

    }

}