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

        this.firstNameField = page.loctor('[data-qa="first_name"]')
        this.lastNameField = page.loctor('[data-qa="last_name"]')
        this.companyNameField = page.loctor('[data-qa="company"]')
        this.adressField = page.loctor('[data-qa="address"]')
        this.adress2Field = page.loctor('[data-qa="address2"]')
        this.countryDropDownList= page.loctor('[data-qa="country"]')
        this.stateField = page.loctor('[data-qa="state"]')
        this.cityField = page.loctor('[data-qa="city"]')
        this.zipCodeField = page.loctor('[data-qa="zipcode"]')
        this.mobileNumberField = page.loctor('[data-qa="mobile_number"]')
        this.createAccButton = page.loctor('[data-qa="create-account"]')

    }

    entryDataRegistry = async (credDataForReg) => {
        await this.maleRadioButton.waitFor()
        await this.maleRadioButton.click()
        await this.passField.waitFor()
        await this.passField.fill(credDataForReg.password)

        this.dayDropList.waitFor()
        this.dayDropList.selectOption('5')
        this.monthDropList.waitFor()
        this.monthDropList.selectOption('5')
        this.yearDropList.waitFor()
        this.yearDropList.selectOption('1987')

        await this.checkBoxOne.click()
        await this.checkBoxTwo.click()

        await this.page.pause()
    }

    entryDataAdressInfo = async () => { 


    }

}