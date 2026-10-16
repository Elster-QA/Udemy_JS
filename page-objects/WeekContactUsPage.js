import { contactUs, genNewEmail } from "../data/WeekData"

export class WeekContactUsPage {
    constructor(page) {
        this.page = page
        this.nameField = page.locator('[data-qa="name"]')
        this.emailField = page.locator('[data-qa="email"]')
        this.subjectField = page.locator('[data-qa="subject"]')
        this.textField = page.locator('[data-qa="message"]')
        this.addFileButton = page.locator('[name="upload_file"]')
    }

    entryDataToPageContactUs = async () => {
        await this.nameField.waitFor()
        await this.nameField.fill(process.env.WEEK_NAME)
        await this.emailField.waitFor()
        await this.emailField.fill(genNewEmail)
        await this.subjectField.waitFor()
        await this.subjectField.fill(contactUs.subject)
        await this.textField.waitFor()
        await this.textField.fill(contactUs.textmessage)
        await this.addFileButton.waitFor()
        await this.addFileButton.setInputFiles('D:/elevoc_dnn_kernel.txt')

    }




} 