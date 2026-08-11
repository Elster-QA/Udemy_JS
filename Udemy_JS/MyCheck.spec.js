import {test, expect} from '@playwright/test'
import {MyProductPages} from '../page-objects/MyProductPages'
import { MyNavigation } from '../page-objects/MyNavigation'
import { MyCheckout } from '../page-objects/MyCheckout'



test ('name', async ({page}) =>{
    const MyProdPages = new MyProductPages(page)

    await MyProdPages.vis()

    await MyProdPages.addProd(0)
    await MyProdPages.addProd(1)
    await MyProdPages.addProd(2)

    const MyNav = new MyNavigation(page)
    await MyNav.toGoBas()

    const MyCheck = new MyCheckout(page)
    await MyCheck.removeCheapestProduct()
    


    
    
    


})