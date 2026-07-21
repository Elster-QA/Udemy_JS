import {test, expect} from '@playwright/test'
import { ProductsPage } from '../page-objects/ProductPage_12' 

test('New user full end-to-end test journey', async ({page}) => {
   const productsPage = new ProductsPage(page)
   await productsPage.visit()
   
  await page.pause()
})