import {$} from '@wdio/globals';

class LoginPage{

    constructor(){

        this.locators = {

            botaoEntrar: '#login-button:not(.app__loading)',

            campoIdentificador: '#input-email',

            botaoContinuar: '#tray-login-identify',

            campoSenha: '#input-password',

            botaoEnviar: '#password-submit',

            erroIdentificador: "//span[text()='Dados inválidos. Tente novamente.']",

            erroAutenticacao: "//span[text()='Autenticação incorreta.']"
        };
    }

    async abrirFormularioLogin(){

        await $(this.locators.botaoEntrar).click();
    }

    async preencherEmail(usuario){

        await $(this.locators.campoIdentificador).setValue(usuario.email);
    }

    async clicarContinuar(){

        await $(this.locators.botaoContinuar).click();
    }

    async preencherSenha(usuario){

        await $(this.locators.campoSenha).setValue(usuario.senha);
    }

    async clicarEnviar(){

        await $(this.locators.botaoEnviar).click();
    }
}

export default new LoginPage();