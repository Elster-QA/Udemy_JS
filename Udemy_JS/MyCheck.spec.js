import {test, expect} from '@playwright/test'
import {OldClass} from '../page-objects/MyProductPages'
import { NewClass } from '../page-objects/MyNavigation'


test ('name', async ({page}) =>{
    const oldClass = new OldClass(page)

    await oldClass.vis()

    await oldClass.addProd(0)
    await oldClass.addProd(1)
    await oldClass.addProd(2)

    const newClass = new NewClass(page)
    await newClass.toGoBas()
    


})