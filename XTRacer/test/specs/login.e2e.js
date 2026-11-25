import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import LoginPage from '../pageobjects/LoginPage.js';

describe('Realizar Login', () => {

    beforeEach(async () => {

        await HomePage.abrir();

        await browser.deleteAllCookies();

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaLogin();

        await expect(browser).toHaveUrl(expect.stringContaining('login'));
    });

    it('Login com dados válidos', async () => {

        const usuario = {

            email: process.env.TEST_EMAIL,
            
            senha: process.env.TEST_PASSWORD
        };

        await LoginPage.abrirFormularioLogin();

        await LoginPage.preencherEmail(usuario);

        await LoginPage.clicarContinuar();

        await LoginPage.preencherSenha(usuario);

        await LoginPage.clicarEnviar();

        await expect(browser).toHaveUrl(expect.stringContaining('my-account'));
    });

    it('Login com e-mail inválido', async () => {

        const usuario = {

            email: 'usuario94027@live.com'
        };

        await LoginPage.abrirFormularioLogin();

        await LoginPage.preencherEmail(usuario);

        await LoginPage.clicarContinuar();

        await expect($(LoginPage.locators.erroIdentificador)).toHaveText('Dados inválidos. Tente novamente.', {wait: 8000});

        await expect($(LoginPage.locators.campoSenha)).not.toExist({wait: 8000});
    });

    it('Login com senha inválida', async () => {

        const usuario = {

            email: process.env.TEST_EMAIL,
            
            senha: '65727683s'
        };

        await LoginPage.abrirFormularioLogin();

        await LoginPage.preencherEmail(usuario);

        await LoginPage.clicarContinuar();

        await LoginPage.preencherSenha(usuario);

        await LoginPage.clicarEnviar();

        await expect($(LoginPage.locators.erroAutenticacao)).toHaveText('Autenticação incorreta.');

        await expect(browser).toHaveUrl(expect.stringContaining('login'));
    });
});