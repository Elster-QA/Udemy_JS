import {expect, test} from '@playwright/test'
import {DropClass} from '../page-objects/DropClass'

test('myT', async ({page})=>{
    const dropClass = new DropClass(page)
    await dropClass.visit()

    await dropClass.sortByASC()
    await dropClass.sortByDESC()
    await dropClass.sortByDEF()

    await dropClass.justPrintunionMass()
        


})