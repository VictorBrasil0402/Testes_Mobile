import {$} from '@wdio/globals';

class HomePage{

    constructor(){

        this.locators = {

            loginLink: '~Login',

            formsLink: '~Forms',

            dragLink: '~Drag'
        };
    }

    async acessarPaginaAutenticacao(){

        await $(this.locators.loginLink).click();
    }

    async acessarForm(){

        await $(this.locators.formsLink).click();
    }

    async acessarDrag(){

        await $(this.locators.dragLink).click();
    }
}

export default new HomePage();
