import {$} from '@wdio/globals';

class CheckoutPage{

    constructor(){

        this.locators = {

            checkoutTitle: 'id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV',

            fullName: 'id=com.saucelabs.mydemoapp.android:id/fullNameET',

            address: 'id=com.saucelabs.mydemoapp.android:id/address1ET',

            city: 'id=com.saucelabs.mydemoapp.android:id/cityET',

            state: 'id=com.saucelabs.mydemoapp.android:id/stateET',

            zipCode: 'id=com.saucelabs.mydemoapp.android:id/zipET',

            country: 'id=com.saucelabs.mydemoapp.android:id/countryET',

            paymentButton: 'id=com.saucelabs.mydemoapp.android:id/paymentCV'
        };
    }

    async preencherDadosPessoais(user){

        await $(this.locators.fullName).setValue(user.fullName);

        await $(this.locators.address).setValue(user.address);

        await $(this.locators.city).setValue(user.city);

        await $(this.locators.state).setValue(user.state);

        await $(this.locators.zipCode).setValue(user.zipCode);

        await $(this.locators.country).setValue(user.country);
    }

    async acessarPaginaPagamento(){

        await $(this.locators.paymentButton).click();
    }
}

export default new CheckoutPage();