import { test, expect } from '@playwright/test'
import { v4 as uuidv4 } from '../node_modules/uuid'
import { MyProductPages } from '../page-objects/MyProductPages'
import { MyNavigation } from '../page-objects/MyNavigation'
import { MyCheckout } from '../page-objects/MyCheckOut'
import { MyLoginPage } from '../page-objects/MyLoginPage'
import { MyRegPage } from '../page-objects/MyRegPage'
import { MyDeliveryDetails } from '../page-objects/MyDeliveryDetails'
import { deliveryDetails as userAdress, paymentData } from '../data/MyDeliveryData'
import { MyPaymentPage } from '../page-objects/MyPaymentPage'



test('name', async ({ page }) => {
    
    const MyProdPages = new MyProductPages(page)
    await MyProdPages.vis()
    await MyProdPages.sortCeapestProducts()


    await MyProdPages.addProd(0)
    await MyProdPages.addProd(1)
    await MyProdPages.addProd(2)

    const MyNav = new MyNavigation(page)
    await MyNav.toGoBas()

    const MyCheck = new MyCheckout(page)
    await MyCheck.removeCheapestProduct()
    await MyCheck.continueToCheckout()

    const loginPage = new MyLoginPage(page)
    await loginPage.moveToSignup()

    const regPage = new MyRegPage(page)
    const emailId = uuidv4()
    const email = emailId + "@gmail.com"
    const password = uuidv4()
    await regPage.entryDataToRegForm(email, password)

    const deliveryDetails = new MyDeliveryDetails(page)
    await deliveryDetails.enrtyDataToDelivery(userAdress)
    await deliveryDetails.checkSaveAdress()

     await deliveryDetails.continueToPayment()

     const paymentPage = new MyPaymentPage(page)
     await paymentPage.activeDiscount()
     await paymentPage.entryPaymentData(paymentData)
     await paymentPage.completePayment()













})