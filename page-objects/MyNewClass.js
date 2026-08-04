export class NewClass {
    
    constructor(page){
        this.page = page
        this.basket = page.locator('[data-qa="header-basket-count"]')
    }

    getBesket = async() =>{
        const text = await this.basket.innerText()
        console.log(text)
        return parseInt(text, 10) 


    }
}