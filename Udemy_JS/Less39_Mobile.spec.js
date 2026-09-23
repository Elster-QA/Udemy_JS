import { test, expect } from '@playwright/test'
import { v4 as uuidv4 } from '../node_modules/uuid/dist'
import { ProductsPage } from '../page-objects/ProductPage_39_Mobile'
import { Navigation } from '../page-objects/Navigation_39_Mobile'
import { Checkout } from '../page-objects/Checkout_39_Mobile'
import { LoginPage } from '../page-objects/LoginPage_39_Mobile'
import { RegisterPage } from '../page-objects/RegisterPage_39_Mobile'
import { DeliveryDetails } from '../page-objects/DeliveryDetails_39_Mobile'
import { deliveryDetails as userAdress} from '../data/DeliveryDetails_data_26'
import { PaymentPage } from '../page-objects/PaymentPage_39_Mobile'
import { paymentsDetails } from '../data/PaymentDetails_34'


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
    await deliveryDetails.saveDetails()
    await deliveryDetails.continueToPayment()


const paymentPage = new PaymentPage(page)
await paymentPage.activateDiscount()
await paymentPage.fillPaymentDetails(paymentsDetails)
await paymentPage.completePayment()













    // await page.pause()

})