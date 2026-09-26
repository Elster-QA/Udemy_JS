import {expect, test} from '@playwright/test'
import { MyAccountPage } from '../page-objects/MyAccountPage'
import { getLoginToken } from '../api-calls/getLoginToken'  

test ('My Account using cookie injection', async ({page})=>{
    const loginToken = await getLoginToken()//Перед входом на страницу, получаем токен
    console.warn({loginToken})
    const myAcount = new MyAccountPage(page)
    await myAcount.visit()
})