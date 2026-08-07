import { expect } from '@playwright/test'

export class Checkout {

    constructor(page) {
        this.page = page
        this.basketCards = page.locator('[data-qa="basket-card"]')
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
        this.basketItemRemoveButton = page.locator('data-qa="basket-card-remove-item"')

    }

    removeCheapestProduct = async () => {
        await this.basketCards.first().waitFor()
        await this.basketItemPrice.first().waitFor()
        const allPricesTexst = await this.basketItemPrice.allInnerTexts()//Возвращает текст со ВСЕХ элементов с данным локатором(Используем allInnerTexts(), когда нам нужны тексты сразу всех найденных элементов.)       
        console.log({allPricesTexst})
        
        
        const justNumbers = allPricesTexst.map((elements) =>{
            console.log({ elements })
        })
        

        // await this.page.pause()


    }









}

