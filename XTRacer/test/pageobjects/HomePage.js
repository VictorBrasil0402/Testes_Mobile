import {$} from '@wdio/globals';

class HomePage{

    constructor(){

        this.url = 'https://www.xtracer.com.br';

        this.locators = {

            menuMobile: '.col-auto.button-open-mobile-menu',

            linkCadastro: '=Cadastre-se',

            linkLogin: '=Entrar',

            linkProdutos: '=Todos os Produtos'
        };
    }

    async abrir(){

        await browser.url(this.url);
    }

    async abrirMenuMobile(){

        await $(this.locators.menuMobile).click();
    }

    async acessarPaginaCadastro(){

        await $(this.locators.linkCadastro).click();
    }

    async acessarPaginaLogin(){

        await $(this.locators.linkLogin).click();
    }

    async acessarPaginaProdutos(){

        await $(this.locators.linkProdutos).click();
    }
}

export default new HomePage();