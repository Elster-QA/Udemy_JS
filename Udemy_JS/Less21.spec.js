import { test, expect } from '@playwright/test'
import { ProductsPage } from '../page-objects/ProductPage_21'
import { Navigation } from '../page-objects/Navigation_21'
import { Checkout } from '../page-objects/Checkout_21'

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

  
  

  
  






  // await page.pause()

})