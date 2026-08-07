export class MyCheckout {
    constructor(page) {
        this.page = page
        this.basketCard = page.locator('[data-qa="basket-card"]')
        this.itemBasPrice = page.locator('[data-qa="basket-item-price"]')
        this.baskCardRemove = page.locator('[data-qa="basket-card-remove-item"]')
    }

    removeCheapestProducts = async () => {
        await this.itemBasPrice.nth(0).waitFor()
        await this.basketCard.nth(0).waitFor()
        const allItemPrice = await this.itemBasPrice.allInnerTexts()//Возвращает текст со ВСЕХ элементов с данным локатором(Используем allInnerTexts(), когда нам нужны тексты сразу всех найденных элементов.)
        console.log({ allItemPrice })
        

    }







}