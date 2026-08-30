import { expect, test } from '@playwright/test'
import { v4 as uuidv4 } from 'uuid'
import { WeekNavigation } from '../page-objects/WeekNavigation'
import { WeekLoginPage } from '../page-objects/WeekLoginPage'
import { credData } from '../page-objects/WeekData'
import { WeekSignupPage } from '../page-objects/WeekSignupPage'
import { credDataForReg } from '../page-objects/WeekData'

test('name', async ({ page }) => {
    
    const navigation = new WeekNavigation(page)
    await navigation.visit()
    await navigation.goToSignup()

    const loginPage = new WeekLoginPage(page)
    await loginPage.fillFieldName(credData)
    const email = uuidv4()
    const emailField = email + '@gmail.com'
    await loginPage.fillFieldMail(emailField)

    const signupPage = new WeekSignupPage(page)
    await signupPage.entryDataRegistry(credDataForReg)


})