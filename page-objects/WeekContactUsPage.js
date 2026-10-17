import { contactUs, genNewEmail } from "../data/WeekData"

export class WeekContactUsPage {
    constructor(page) {
        this.page = page
        this.nameField = page.locator('[data-qa="name"]')
        this.emailField = page.locator('[data-qa="email"]')
        this.subjectField = page.locator('[data-qa="subject"]')
        this.textField = page.locator('[data-qa="message"]')
        this.addFileButton = page.locator('[name="upload_file"]')
        this.submitButton = page.locator('[name="submit"]')
        this.accessText = page.locator('[style="display: block;"]')
        this.homeButton = page.locator('[class="btn btn-success"]')
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
        await this.addFileButton.setInputFiles('E:/OTHER/IMG_20240112_212315_224.jpg')
        await this.page.on('dialog', async dialog => {//For modal window for browser
        await dialog.accept()
        })
        await this.submitButton.waitFor()
        await this.submitButton.click()
        // await expect(this.accessText.first()).toHaveText('Success! Your details have been submitted successfully.')
        await this.homeButton.waitFor()
        await this.homeButton.click()jh
        await this.page.pause()




    }







} 