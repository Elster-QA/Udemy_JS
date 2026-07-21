import {test, expect} from '@playwright/test'
import { ProductsPage } from '../page-objects/ProductPage_13' 

test('New user full end-to-end test journey', async ({page}) => {
   const productsPage = new ProductsPage(page)
   await productsPage.visit()
  //await productsPage.addProductToBasket()

   await productsPage.addProductToBasket(0)
   await productsPage.addProductToBasket(1)
   await productsPage.addProductToBasket(2)

  // await page.pause()
})