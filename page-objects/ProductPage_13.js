export class ProductsPage {
   constructor(page) {
   this.page = page
   this.add = page.locator('[data-qa="product-button"]')
   }
      
    visit = async () => {
        await this.page.goto('/')
    }
    
    addProductToBasket = async(index)=>{
    await this.add.nth(index).click()
    }

    


}