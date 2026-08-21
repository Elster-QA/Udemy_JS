import { expect } from '@playwright/test'
import { MyNavigation } from "./MyNavigation"


export class MyProductPages {

    constructor(page) {
        this.page = page
        this.Button = page.locator('[data-qa="product-button"]')
        this.dropDownList = page.locator('[data-qa="sort-dropdown"]')
        this.dropDownListButton = page.locator('[data-qa="sort-dropdown"]')
        this.itemProdCard = page.locator('[data-qa="product-title"]')



    }

    vis = async () => {
        await this.page.goto('/')
    }

    addProd = async (index) => {
        const checkButton = expect(this.Button.nth(index))
        const MyNav = new MyNavigation(this.page)


        await this.Button.nth(index).waitFor()

        const beforeClick = await MyNav.getBesket()
        await checkButton.toHaveText('Add to Basket')
        await this.Button.nth(index).click()
        await checkButton.toHaveText('Remove from Basket')
        const afterClick = await MyNav.getBesket()
        expect(afterClick).toBeGreaterThan(beforeClick)


    }

    sortCeapestProducts =async () => {
        await this.page.pause()
        await this.dropDownListButton.waitFor()
        await this.itemProdCard.first().waitFor()
        const beforeClickOn = await this.itemProdCard.allInnerTexts()
        console.log(beforeClickOn)
        await this.dropDownListButton.selectOption('price-asc')
        const afterClickOn = await this.itemProdCard.allInnerTexts()
        console.log(afterClickOn)
        await expect(beforeClickOn).not.toEqual(afterClickOn)
         

    }










}
