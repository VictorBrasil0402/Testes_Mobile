import CadastroPFComponent from '../components/CadastroPFComponent.js';

import CadastroPJComponent from '../components/CadastroPJComponent.js';

class CadastroPage{

    constructor(){

        this.locators = {

            titulo: 'h1'
        };

        this.pessoaFisica = CadastroPFComponent;

        this.pessoaJuridica = CadastroPJComponent;
    }
}

export default new CadastroPage();