import { test, expect } from '@playwright/test'
import { ProductsPage } from '../page-objects/ProductPage_19'
import { Navigation } from '../page-objects/Navigation_19'
import { Checkout } from '../page-objects/Checkout_19'

test('New user full end-to-end test journey', async ({ page }) => {
  const productsPage = new ProductsPage(page)
  await productsPage.visit()


  await productsPage.addProductToBasket(0)
  await productsPage.addProductToBasket(1)
  await productsPage.addProductToBasket(2)

  const navigation = new Navigation(page)
  await navigation.goToCheckout()

  const checkout = new Checkout(page)
  await checkout.removeCheapestProduct()


  
  






  // await page.pause()

})