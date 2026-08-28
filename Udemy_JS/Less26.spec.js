import { test, expect } from '@playwright/test'
import { v4 as uuidv4 } from '../node_modules/uuid'
import { ProductsPage } from '../page-objects/ProductPage_26'
import { Navigation } from '../page-objects/Navigation_26'
import { Checkout } from '../page-objects/Checkout_26'
import { LoginPage } from '../page-objects/LoginPage_26'
import { RegisterPage } from '../page-objects/RegisterPage_26'
import {DeliveryDetails} from '../page-objects/DeliveryDetails_26'
import { deliveryDetails as userAdress } from '../data/DeliveryDetails_26'


test('New user full end-to-end test journey', async ({ page }) => {
    const productsPage = new ProductsPage(page)
    await productsPage.visit()

    await productsPage.sortByCheapest()//сортировка по цене, по дешовому тов.


    await productsPage.addProductToBasket(0)
    await productsPage.addProductToBasket(1)
    await productsPage.addProductToBasket(2)

    const navigation = new Navigation(page)
    await navigation.goToCheckout()

    const checkout = new Checkout(page)
    await checkout.removeCheapestProduct()

    await checkout.continueToCheckout()

    const login = new LoginPage(page)
    await login.moveToSignup()

    const registerPage = new RegisterPage(page)
    const emailId = uuidv4()
    const email = emailId + "@gmail.com"
    const password = uuidv4() 
    await registerPage.signUpAsNewUser(email, password)

    const deliveryDetails = new DeliveryDetails(page)
    await deliveryDetails.fillDetails(userAdress)














    // await page.pause()

})