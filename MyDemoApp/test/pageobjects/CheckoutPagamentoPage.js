import {$} from '@wdio/globals';

class CheckoutPagamentoPage{

    constructor(){

        this.locators = {

            fullName: 'id=com.saucelabs.mydemoapp.android:id/nameET',

            cardNumber: 'id=com.saucelabs.mydemoapp.android:id/cardNumberET',

            cardDate: 'id=com.saucelabs.mydemoapp.android:id/expirationDateET',

            cardCode:'id=com.saucelabs.mydemoapp.android:id/securityCodeET',

            reviewButton: 'id=com.saucelabs.mydemoapp.android:id/paymentBtn'
        };
    }

    async preencherDadosPagamento(user){

        await $(this.locators.fullName).setValue(user.fullName);

        await $(this.locators.cardNumber).setValue(user.cardNumber);

        await $(this.locators.cardDate).setValue(user.cardDate);

        await $(this.locators.cardCode).setValue(user.cardCode);
    }

    async clicarRevisarPedido(){

        await $(this.locators.reviewButton).click();
    }
}

export default new CheckoutPagamentoPage();