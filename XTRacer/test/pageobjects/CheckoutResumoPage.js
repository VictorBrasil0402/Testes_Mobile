import {$} from '@wdio/globals';

class CheckoutResumoPage{

    constructor(){

        this.locators = {

            tituloResumo: '.hidden-md.hidden-lg .ch-order-summary-summary-title',

            linkVoltar: '=Voltar'
        };
    }

    async clicarVoltar(){

        await $(this.locators.linkVoltar).click();
    }
}

export default new CheckoutResumoPage();