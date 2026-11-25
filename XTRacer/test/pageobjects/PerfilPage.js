import {$} from '@wdio/globals';

class PerfilPage{

    constructor(){

        this.locators = {

            linkLoja: '.app__header__store-link'
        };
    }

    async voltarParaHome(){

        await $(this.locators.linkLoja).waitForClickable({timeout: 10000});

        await $(this.locators.linkLoja).click();
    }
}

export default new PerfilPage();