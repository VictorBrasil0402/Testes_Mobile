import {$} from '@wdio/globals';

class CheckoutPage{

    constructor(){

        this.locators = {

            campoCEP: '#cart-shipping-vue',

            botaoAlterarCEP: '[data-test="change-zipcode-link"]',

            botaoContinuar: 'a[data-checkout-event-tracker="avancar_topo"]',

            erroCep: '[data-test="cart-shipping-alert"]'
        };
    }

    async clicarAlterarCEP(){

        await $(this.locators.botaoAlterarCEP).click();
    }

    async preencherCEP(usuario){

        await $(this.locators.campoCEP).setValue(usuario.cep);
    }

    async clicarContinuar(){

        await $(this.locators.botaoContinuar).click();
    }
}

export default new CheckoutPage();