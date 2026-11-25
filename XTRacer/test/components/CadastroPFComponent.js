import {$} from '@wdio/globals';

class CadastroPFComponent{

    constructor(){

        this.locators = {

            nomeCompleto: '#pf_nome_cliente',

            dataNascimento: '#pf_data_nascimento',

            cpf: '#pf_cpf_cliente',
            
            celular: '#telefone_cliente_2',

            email: '#email_cliente',

            confirmacaoEmail: '#email_cliente2',

            senha: '#senha_cliente',

            confirmacaoSenha: '#senha_cliente2',

            botaoCadastrar: "//button[contains(., 'Avançar')]",

            erroNomeCompleto: '#pf_nome_cliente_erro',

            erroDataNascimento: '#pf_data_nascimento_erro',

            erroCpf: '#pf_cpf_cliente_erro',

            erroCelular: '.blocoAlerta',

            erroConfirmacaoEmail: '#email_cliente2_erro',

            erroSenha: '#senha_cliente_erro',

            erroConfirmacaoSenha: '#senha_cliente2_erro'
        };
    }

    async preencherFormulario(usuario){

        await $(this.locators.nomeCompleto).setValue(usuario.nomeCompleto);

        await $(this.locators.dataNascimento).setValue(usuario.dataNascimento);

        await $(this.locators.cpf).setValue(usuario.cpf);

        await $(this.locators.celular).setValue(usuario.celular);

        await $(this.locators.email).setValue(usuario.email);

        await $(this.locators.confirmacaoEmail).setValue(usuario.confirmacaoEmail);

        await $(this.locators.senha).setValue(usuario.senha);

        await $(this.locators.confirmacaoSenha).setValue(usuario.confirmacaoSenha);
    }

    async clicarCadastrar(){

        await $(this.locators.botaoCadastrar).click();
    }
}

export default new CadastroPFComponent();