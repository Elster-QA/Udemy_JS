import { expect, test } from '@playwright/test'
import { v4 as uuidv4 } from 'uuid'
import { WeekNavigation } from '../page-objects/WeekNavigation'
import { WeekLoginPage } from '../page-objects/WeekLoginPage'
import { credData, credDataForReg, adressData } from '../data/WeekData'
import { WeekSignupPage } from '../page-objects/WeekSignupPage'
import { WeekProducts_Polo } from '../page-objects/WeekProducts_Polo'



test('name', async ({ page }) => {

    const navigation = new WeekNavigation(page)
    await navigation.visit()
    await navigation.goToSignupPage()

    const loginPage = new WeekLoginPage(page)
    await loginPage.fillFieldName(credData)
    const email = uuidv4()
    const emailField = email + '@gmail.com'
    await loginPage.fillFieldMail(emailField)

    const signupPage = new WeekSignupPage(page)
    await signupPage.entryDataRegistry(credDataForReg)
    await signupPage.entryDataAdressInfo(adressData, credData)
    await signupPage.logOutAction()

    await loginPage.authAfterRegistry(emailField, credDataForReg, credData)

    await navigation.goToProductsPage()

    const productsPage = new WeekProducts_Polo(page)
    await productsPage.goToCatPolo()
    await productsPage.addProductCardAndReturn(2)
    await productsPage.addProductCardAndReturn(1)
    await productsPage.addProductCardAndReturn(4)




})