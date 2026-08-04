
export class Navigation {
    constructor(page) {
        this.page = page
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')

    }

    getBasketCount = async () => {//Метод возвращает значения счетчика корзины
        await this.basketCounter.waitFor()//Дожидаемся пока элемент отобразится на странице
        const text = await this.basketCounter.innerText() //.innerText()- Возвращает "строку"!!! из элемента
        //console.log(text)//Вывод переменной "text" в консоль
        return parseInt(text, 10)//Преобразовывает "строку"(тип данных)! в скобках(в аргументе) сначало(первым) указываем "text"-это что мы будем преобразовывать, а потом "10"- указываем систему измерения в какую будем преодразовывать


    }




}


