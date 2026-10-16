export class WeekContactUsPage {
    constructor(page) {
        this.page = page
        this.nameField = page.locator('[data-qa="name"]')
    }

    entryDataToField = async () => { 
        await this.nameField.waitFor()
        await this.nameField.fill('HelloWorld')
    }




} 