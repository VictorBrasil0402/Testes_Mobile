import {$} from '@wdio/globals';

class CadastroPJComponent{

    constructor(){

        this.locators = {

            linkPessoaJuridica: '=Pessoa Jurídica',
            
            razaoSocial: '#razao_social',

            inscricaoEstadual: '#ie',

            cnpj: '#cnpj',

            nomeCompleto: '#pj_nome_cliente',

            celular: '#telefone_cliente_2',

            email: '#email_cliente',

            confirmacaoEmail: '#email_cliente2',

            senha: '#senha_cliente',

            confirmacaoSenha: '#senha_cliente2',

            botaoCadastrar: "//button[contains(., 'Avançar')]",

            erroRazaoSocial: '#razao_social_erro',

            erroInscricaoEstadual: '#ie_erro',

            erroCnpj: '#cnpj_erro',

            erroNomeCompleto: '#pj_nome_cliente_erro',

            erroCelular: '.blocoAlerta',

            erroConfirmacaoEmail: '#email_cliente2_erro',

            erroSenha: '#senha_cliente_erro',

            erroConfirmacaoSenha: '#senha_cliente2_erro'
        };
    }

    async clicarOpcaoPJ(){

        await $(this.locators.linkPessoaJuridica).click();
    }

    async preencherFormulario(usuario){

        await $(this.locators.razaoSocial).setValue(usuario.razaoSocial);

        await $(this.locators.inscricaoEstadual).setValue(usuario.inscricaoEstadual);

        await $(this.locators.cnpj).setValue(usuario.cnpj);

        await $(this.locators.nomeCompleto).setValue(usuario.nomeCompleto);

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

export default new CadastroPJComponent();