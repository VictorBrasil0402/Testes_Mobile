import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import AutenticacaoPage from '../pageobjects/AutenticacaoPage.js';

import User from '../fixtures/User.js';

import {faker} from '@faker-js/faker';

describe('Realizar Login', () => {

    beforeEach(async () => {

        await HomePage.acessarPaginaAutenticacao();
        
        await expect($(AutenticacaoPage.locators.title)).toHaveText('Login / Sign up Form');
    });

    afterEach(async () => {

        await browser.terminateApp('com.wdiodemoapp');

        await browser.activateApp('com.wdiodemoapp');
    });

    it('Login com dados válidos', async () => {

        const user = User.gerarUsuario();

        await AutenticacaoPage.login.preencherEmail(user);

        await AutenticacaoPage.login.preencherSenha(user);

        await AutenticacaoPage.login.clicarEnviar();

        await expect($(AutenticacaoPage.login.locators.successAlert)).toHaveText('Success');

        await expect($(AutenticacaoPage.login.locators.successMessage).toHaveText('You are logged in!'));
    });

    const emailFormatoInvalido = [

        `user${faker.string.alphanumeric(8)}@`,
        `user${faker.string.alphanumeric(8)}@email`,
        `@user${faker.string.alphanumeric(8)}`
    ];

    emailFormatoInvalido.forEach((email) => {

    it(`Login com formato de e-mail inválido: ${email}`, async () => {

        const user = User.gerarUsuario();

        user.email = email;

        await AutenticacaoPage.login.preencherEmail(user);

        await AutenticacaoPage.login.preencherSenha(user);

        await AutenticacaoPage.login.clicarEnviar();

        await expect($(AutenticacaoPage.login.locators.invalidAddress)).toHaveText('Please enter a valid email address');
    });
    });

    it('Login com senha inválida', async () => {

        const user = User.gerarUsuario();

        user.password = '56213a';

        await AutenticacaoPage.login.preencherEmail(user);

        await AutenticacaoPage.login.preencherSenha(user);

        await AutenticacaoPage.login.clicarEnviar();

        await expect($(AutenticacaoPage.login.locators.invalidPassword)).toHaveText('Please enter at least 8 characters');
    });

    it('Login com e-mail não informado', async () => {

        const user = User.gerarUsuario();

        await AutenticacaoPage.login.preencherSenha(user);

        await AutenticacaoPage.login.clicarEnviar();

        await expect($(AutenticacaoPage.login.locators.invalidAddress)).toHaveText('Please enter a valid email address');
    });

    it('Login com senha não informada', async () => {

        const user = User.gerarUsuario();

        await AutenticacaoPage.login.preencherEmail(user);

        await AutenticacaoPage.login.clicarEnviar();

        await expect($(AutenticacaoPage.login.locators.invalidPassword)).toHaveText('Please enter at least 8 characters');
    });
});