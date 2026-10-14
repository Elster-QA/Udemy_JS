import { expect, test } from '@playwright/test'
import { MyAccountPage } from '../page-objects/MyAccountPage'
import { getLoginToken } from '../api-calls/getLoginToken'
import { adminDetails } from '../data/userDetails'


test('My Account using cookie injection and MOCK network request', async ({ page }) => {
    const loginToken = await getLoginToken(adminDetails)//Перед входом на страницу, получаем токен

    await page.route('**/api/user**', async (route, request) => {
        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'PLAYWRIGHT error FROM MOCK' }),
        })
    })

    const myAcount = new MyAccountPage(page)
    await myAcount.visit()
    await page.evaluate((loginTokenInsideBrowserCode) => {
        document.cookie = 'token=' + loginTokenInsideBrowserCode //Получаем чистый loginToken, передаём его в параметр evaluate(), добавляем к нему token= и через document.cookie устанавливаем готовую cookie на текущей странице.
    }, loginToken)
    await myAcount.visit()
    await myAcount.checkHeader()
    


})

