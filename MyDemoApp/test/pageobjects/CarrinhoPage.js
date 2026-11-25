import {$} from '@wdio/globals';

class CarrinhoPage{

    constructor(){

        this.locators = {

            cartTitle: 'id=com.saucelabs.mydemoapp.android:id/productTV',

            totalQuantity: 'id=com.saucelabs.mydemoapp.android:id/itemsTV',

            totalPrice: 'id=com.saucelabs.mydemoapp.android:id/totalPriceTV',

            checkoutButton: 'id=com.saucelabs.mydemoapp.android:id/cartBt'
        };
    }

    async obterQuantidadeTotal(){

        const totalQuantity = await $(this.locators.totalQuantity).getText();

        return Number(totalQuantity.replace(/[^\d]/g, ''));
    }

    async obterPrecoTotal(){

        const totalPrice = await $(this.locators.totalPrice).getText();

        return Number(totalPrice.replace(/[^\d.]/g, ''));
    }

    async acessarCheckout(){

        await $(this.locators.checkoutButton).click();
    }
}

export default new CarrinhoPage();