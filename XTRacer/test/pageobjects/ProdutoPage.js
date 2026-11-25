import {$} from '@wdio/globals';

class ProdutoPage{

    constructor(){

        this.locators = {

            botaoComprar: "//button[text()='COMPRAR']",

            botaoFinalizarCompra: '=Finalizar Compra',

            legendaProdutoIndisponivel: "//span[contains(text(), 'Não disponível')]"
        };
    }

    async clicarComprar(){

        await $(this.locators.botaoComprar).click();
    }

    async clicarFinalizarCompra(){

        await $(this.locators.botaoFinalizarCompra).click();
    }
}

export default new ProdutoPage();