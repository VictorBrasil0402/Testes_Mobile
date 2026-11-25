import {$} from '@wdio/globals';

class ProdutoPage{

    constructor(){

        this.locators = {

            cartButton: 'id=com.saucelabs.mydemoapp.android:id/cartBt',

            cartBadge: 'id=com.saucelabs.mydemoapp.android:id/cartTV',

            cartLink: 'id=com.saucelabs.mydemoapp.android:id/cartIV'
        };
    }

    async adicionarProdutoCarrinho(){

        await $(this.locators.cartButton).click();
    }

    async acessarCarrinho(){

        await $(this.locators.cartLink).click();
    }
}

export default new ProdutoPage();