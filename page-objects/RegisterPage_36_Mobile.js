import { v4 as uuidv4 } from '../node_modules/uuid/dist'//Импорт зависимости для генерации переменных

import { expect } from "@playwright/test"

export class RegisterPage {
    constructor(page) {
        this.page = page
        this.mailField = page.getByPlaceholder('E-Mail')//Новый локатор, используется есть у поля есть плейсхолдеры. Но можно и так getByRole('textbox', { name: 'E-Mail' })
        this.passwordField = page.getByPlaceholder('Password')//Новый локатор используется есть у поля есть плейсхолдеры. Но можно и так getByRole('textbox', { name: 'Password' }) 
        this.signUpButton = page.getByRole('button', { name: 'Register' })

    }

    signUpAsNewUser = async (email, password) => {
        
        await this.mailField.waitFor()
        
        await this.mailField.fill(email)
        await expect(this.mailField).toHaveValue(email)//Новый метод. Проверка содержимого поля 
        await this.passwordField.waitFor()
        await this.passwordField.fill(password)
        await expect(this.passwordField).toHaveValue(password)
        await this.signUpButton.waitFor()
        await this.signUpButton.click()
        await expect(this.page).toHaveURL(/\/delivery-details/)

    }
}