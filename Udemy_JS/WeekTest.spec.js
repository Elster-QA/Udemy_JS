import { expect, test } from '@playwright/test'
import { v4 as uuidv4 } from 'uuid'
import { WeekNavigation } from '../page-objects/WeekNavigation'
import { WeekLoginPage } from '../page-objects/WeekLoginPage'
import { credData, adressData, itemData, itemDataInCart } from '../data/WeekData'
import { WeekSignupPage } from '../page-objects/WeekSignupPage'
import { WeekProductsPage } from '../page-objects/WeekProductsPage'
import { WeekCartPage } from '../page-objects/WeekCartPage'



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
    await signupPage.entryDataRegistry(credData)
    await signupPage.entryDataAdressInfo(adressData, credData)
    await signupPage.logOutAction()
    await loginPage.authAfterRegistry(emailField, credData)
    await navigation.goToProductsPage()

    const productsPage = new WeekProductsPage(page)
    const cartPage = new WeekCartPage(page)
    await productsPage.goToBrandsPolo()
    await productsPage.addProductCard(itemData.Polo_T_Shirts)
    await navigation.goToBasketPage()
    await cartPage.checkItemInBasket(itemDataInCart.inCartPolo_T_Shirts)

    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()
    await productsPage.addProductCard(itemData.Soft_Stretch_Jeans)
    await navigation.goToBasketPage()
    await cartPage.checkItemInBasket(itemDataInCart.inCartSoft_Stretch_Jeans)

    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()
    await productsPage.addProductCard(itemData.Blue_Top)
    await navigation.goToBasketPage()
    await cartPage.checkItemInBasket(itemDataInCart.inBlue_Top)


    

    
    




})