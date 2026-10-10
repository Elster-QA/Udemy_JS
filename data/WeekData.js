import { v4 as uuidv4 } from '../node_modules/uuid'


export const adressData = {
    firstName: 'John',
    lastName: 'Miller',
    companyName: 'MillerWorldPeaceInc.',
    adress: ['Gogol str.', 'p.o.Box 321', 'MillerWorldPeaceInc.'],
    adress2: ['Gogol+ str.', 'p.o.Box 3211', 'Miller2WorldPeaceInc'],
    countryName: 'New Zealand',
    stateName: 'Arizona',
    cityName: 'All_Black',
    zipNumber: '01987',
    mobileNumber: '+380753578965'

}

export const itemData = {
    Polo_T_Shirts: '[data-product-id="30"]',
    Soft_Stretch_Jeans: '[data-product-id="33"]',
    Blue_Top: '[data-product-id="1"]',
    Rose_Pink_Maxi_Dress: '[data-product-id="38"]',
    Sleeveless_Dress: '[data-product-id="3"]',

}

export const itemDataInCart = {
    inCartPolo_T_Shirts: '#product-30',
    inCartSoft_Stretch_Jeans: '#product-33',
    inCartBlue_Top: '#product-1',
    inCartRose_Pink_Maxi_Dress: '#product-38',
    inCartSleeveless_Dress: '#product-3',
    inCartLace_Top: '#product-42'
}

export const itemDataViewProduct = {
    viewProdPolo_T_Shirts: 'a[href="/product_details/30"]',
    viewProdSoft_Stretch_Jeans: 'a[href="/product_details/33"]',
    viewProdBlue_Top: 'a[href="/product_details/1"]',
    viewProdRose_Pink_Maxi_Dress:'a[href="/product_details/38"]',
    viewProdSleeveless_Dress:'a[href="/product_details/3"]',
    viewProdLace_Top:'a[href="/product_details/42"]',
    

}


const email = uuidv4()
const emailField = email + '@gmail.com'
export const genNewEmail = emailField

