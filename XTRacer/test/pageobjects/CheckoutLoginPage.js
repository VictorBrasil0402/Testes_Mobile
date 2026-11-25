import {$} from '@wdio/globals';

class CheckoutLoginPage{

    constructor(){

        this.locators = {

            campoIdentificador: '#login-email',

            botaoContinuar: '#login-action'
        };
    }

    async preencherEmail(usuario){

        await $(this.locators.campoIdentificador).setValue(usuario.email);
    }

    async clicarContinuar(){

        await $(this.locators.botaoContinuar).click();
    }
}

export default new CheckoutLoginPage();