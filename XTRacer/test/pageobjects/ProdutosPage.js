import {$} from '@wdio/globals';

class ProdutosPage{

    constructor(){

        this.locators = {

            botaoFiltrosMobile: '.button-filter-mobile',

            botaoFiltrar: '.filter-button',

            produto: '.list-product.flex.f-wrap .item.flex',

            linkUltimaPagina: 'a[rel="last"]',

            produtoIndisponivel: '.list-product.flex.f-wrap .notify-me' 
        };
    }

    async abrirFiltros(){

        await $(this.locators.botaoFiltrosMobile).click();
    }

    async selecionarFiltro(nomeFiltro){

        await $(`//span[@class='filter-name' and text()='${nomeFiltro}']`).click();
    }

    async clicarFiltrar(){

        await $(this.locators.botaoFiltrar).click();
    }

    async selecionarUltimaPagina(){

        await $(this.locators.linkUltimaPagina).click();
    }

    async selecionarProduto(){

        await $(this.locators.produto).click();
    }

    async selecionarProdutoIndisponivel(){

        await $(this.locators.produtoIndisponivel).click();
    }
}

export default new ProdutosPage();