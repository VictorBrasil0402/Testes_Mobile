import {$} from '@wdio/globals';

class HomePage{

    constructor(){

        this.locators = {

            menu: 'id=com.saucelabs.mydemoapp.android:id/menuIV',

            loginLink: '~Login Menu Item',

            productsTitle: 'id=com.saucelabs.mydemoapp.android:id/productTV',

            productsCatalog: 'id=com.saucelabs.mydemoapp.android:id/productRV',

            productImage: '~Product Image',
        };
    }

    async acessarPaginaLogin(){

        await $(this.locators.menu).click();

        await $(this.locators.loginLink).click();
    }

    async selecionarProduto(){

        await $(this.locators.productsCatalog).$(this.locators.productImage).click();
    }
}

export default new HomePage();