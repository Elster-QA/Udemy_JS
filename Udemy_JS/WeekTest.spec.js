import { expect, test } from '@playwright/test'
import { WeekNavigation } from '../page-objects/WeekNavigation'
import { WeekLoginPage } from '../page-objects/WeekLoginPage'
import { credData, adressData, itemDataOnProductsPage, itemDataInCart, itemDataViewProduct, genNewEmail } from '../data/WeekData'
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
    await productsPage.addProductCard(itemDataOnProductsPage.Polo_T_Shirts)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartPolo_T_Shirts)

    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()
    await productsPage.addProductCard(itemDataOnProductsPage.Soft_Stretch_Jeans)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartSoft_Stretch_Jeans)



    await navigation.goToProductsPage()
    await productsPage.goToBrandsMadame()
    await productsPage.addProductCard(itemDataOnProductsPage.Rose_Pink_Maxi_Dress)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartRose_Pink_Maxi_Dress)

    await navigation.goToProductsPage()
    await productsPage.goToBrandsMadame()
    await productsPage.addProductCard(itemDataOnProductsPage.Sleeveless_Dress)
    await navigation.goToBasketPage()
    await cartPage.checkAddItemInBasket(itemDataInCart.inCartSleeveless_Dress)


    await cartPage.remFromBasketItem(itemDataOnProductsPage.Sleeveless_Dress)
    await cartPage.checkRemItemFromBasket(itemDataOnProductsPage.Sleeveless_Dress)
    await cartPage.remFromBasketItem(itemDataOnProductsPage.Soft_Stretch_Jeans)
    await cartPage.checkRemItemFromBasket(itemDataOnProductsPage.Soft_Stretch_Jeans)


    await navigation.goToProductsPage()
    await productsPage.goToBrandsPolo()

    await productsPage.goToViewProduct(itemDataViewProduct.viewProdSoft_Stretch_Jeans)
    await productsPage.setCountItemProduct('9')
    const itemBeforeAdd = await productsPage.getCountItemInViewProduct()

    await navigation.goToBasketPage()
    const itemAfterAdd = await cartPage.getCountItemInBasket(itemDataInCart.inCartSoft_Stretch_Jeans)
    expect(itemBeforeAdd).toEqual(itemAfterAdd)
    await page.pause()

    await navigation.goToProductsPage()
    // await productsPage.checkSearchField('Polo')//Think about it later
    await productsPage.goToCatWomenTOPS()
    await productsPage.goToViewProduct(itemDataViewProduct.viewProdLace_Top)
    await productsPage.setCountItemProduct('5')
    const countBeforeAdd = await productsPage.getCountItemInViewProduct()
    await navigation.goToBasketPage()
    const countAfterAdd = await cartPage.getCountItemInBasket(itemDataInCart.inCartLace_Top)
    expect(countBeforeAdd).toEqual(countAfterAdd)





    //...to be continue










})