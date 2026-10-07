import { expect, test } from '@playwright/test'
import { WeekNavigation } from '../page-objects/WeekNavigation'
import { WeekLoginPage } from '../page-objects/WeekLoginPage'
import { credData, adressData, itemData, itemDataInCart, itemDataViewProduct, genNewEmail } from '../data/WeekData'
import { WeekSignupPage } from '../page-objects/WeekSignupPage'
import { WeekProductsPage } from '../page-objects/WeekProductsPage'
import { WeekCartPage } from '../page-objects/WeekCartPage'




test('name', async ({ page }) => {

    const navigation = new WeekNavigation(page)
    await navigation.visit()
    await navigation.goToSignupPage()

    const loginPage = new WeekLoginPage(page)
    await loginPage.fillFieldName(credData)
    await loginPage.fillFieldMail(genNewEmail)

    const signupPage = new WeekSignupPage(page)
    await signupPage.entryDataRegistry(credData)
    await signupPage.entryDataAdressInfo(adressData, credData)
    await signupPage.logOutAction()
    await loginPage.authAfterRegistry(genNewEmail, credData)


    const productsPage = new WeekProductsPage(page)
    const cartPage = new WeekCartPage(page)
    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()
    await productsPage.addProductCard(itemData.Polo_T_Shirts)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartPolo_T_Shirts)

    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()
    await productsPage.addProductCard(itemData.Soft_Stretch_Jeans)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartSoft_Stretch_Jeans)



    await navigation.goToProductsPage()
    await productsPage.goToBrandsMadame()
    await productsPage.addProductCard(itemData.Rose_Pink_Maxi_Dress)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartRose_Pink_Maxi_Dress)

    await navigation.goToProductsPage()
    await productsPage.goToBrandsMadame()
    await productsPage.addProductCard(itemData.Sleeveless_Dress)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartSleeveless_Dress)


    await cartPage.remFromBasketItem(itemData.Sleeveless_Dress)
    await cartPage.checkRemItemFromBasket(itemData.Sleeveless_Dress)
    await cartPage.remFromBasketItem(itemData.Soft_Stretch_Jeans)
    await cartPage.checkRemItemFromBasket(itemData.Soft_Stretch_Jeans)


    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()
    await page.pause()
    await productsPage.goToViewProduct(itemDataViewProduct.viewProdSoft_Stretch_Jeans)
    await productsPage.setCountItemProduct('3')
    await navigation.goToBasketPage()
    //...to be continue










})