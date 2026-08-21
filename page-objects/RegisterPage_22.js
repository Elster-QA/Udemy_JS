import { expect } from "@playwright/test"

export class RegisterPage {
    constructor(page) {
        this.page = page
        this.mailField = page.getByPlaceholder('E-Mail')//Новый локатор используется есть у поля есть плейсхолдеры. Но можно и так getByRole('textbox', { name: 'E-Mail' })
        this.passwordField = page.getByPlaceholder('Password')//Новый локатор используется есть у поля есть плейсхолдеры. Но можно и так getByRole('textbox', { name: 'Password' }) 
        this.signUpButton = page.getByRole('button', { name: 'Register' })

    }

    signUpAsNewUser = async () => {
        await this.page.pause()
        await this.mailField.waitFor()
        await this.mailField.fill('testmail@gmail.com')
        await expect(this.mailField).toHaveValue('testmail@gmail.com')//Новый метод. Проверка содержимого поля 
        await this.passwordField.waitFor()
        await this.passwordField.fill('Pass123')
        await expect(this.passwordField).toHaveValue('Pass123')
        await this.signUpButton.waitFor()
        await this.signUpButton.click()

    }
}