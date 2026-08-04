import {test, expect} from '@playwright/test'
import {OldClass} from '../page-objects/MyOldClass'

test ('name', async ({page}) =>{
    const oldClass = new OldClass(page)

    await oldClass.vis()

    await oldClass.addProd(0)
    await oldClass.addProd(1)
    await oldClass.addProd(2)
    


})