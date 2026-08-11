export class MyCheckout {

    constructor(page) {
        this.page = page
        this.productBasketCard = page.locator('[data-qa="basket-card"]')
        this.itemPrice = page.locator('[data-qa="basket-item-price"]')
        this.cardRemButton = page.locator('[data-qa="basket-card-remove-item"]')
    }

    removeCheapestProduct = async () => {
        await this.productBasketCard.nth(0).waitFor()
        await this.itemPrice.nth(0).waitFor()
        await this.cardRemButton.nth(0).waitFor()
        const allItemPrices = await this.itemPrice.allInnerTexts()
        console.log({ allItemPrices })

        const justnumbers = allItemPrices.map((elements) => {
            console.log({ elements })
            const withOutDollars = elements.replace("$", "")
            console.log({ withOutDollars })
            return parseInt(withOutDollars, 10)

        })
        console.log({ justnumbers })

    }

}