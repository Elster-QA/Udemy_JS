import * as dotenv from '../node_modules/dotenv'//Зависимость для работы с .env файлоМ. В файле хранятся креды. Зависимость передает данные из .env в process.env., а process.env. передает их уже в тест.
dotenv.config()//Вызов зависимости 
import { expect, test } from '@playwright/test'
import { MyAccountPage } from '../page-objects/MyAccountPage'
import { getLoginToken } from '../api-calls/getLoginToken'
import { adminDetails } from '../data/userDetails'

test('My Account using cookie injection', async ({ page }) => {
    const loginToken = await getLoginToken(adminDetails)//Перед входом на страницу, получаем токен
    const myAcount = new MyAccountPage(page)
    await myAcount.visit()
    await page.evaluate((loginTokenInsideBrowserCode) => {
        document.cookie = 'token=' + loginTokenInsideBrowserCode //Получаем чистый loginToken, передаём его в параметр evaluate(), добавляем к нему token= и через document.cookie устанавливаем готовую cookie на текущей странице.
    }, loginToken)
    await myAcount.visit()
    await myAcount.checkHeader()


})

