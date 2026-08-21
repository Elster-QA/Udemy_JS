import { test, expect } from '@playwright/test'
import { ProductsPage } from '../page-objects/ProductPage_22'
import { Navigation } from '../page-objects/Navigation_22'
import { Checkout } from '../page-objects/Checkout_22'
import { LoginPage } from '../page-objects/LoginPage_22'
import { RegisterPage } from './RegisterPage_22'

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
  await registerPage.signUpAsNewUser()














  // await page.pause()

})