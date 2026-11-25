import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import LoginPage from '../pageobjects/LoginPage.js';

import User from '../fixtures/User.js';

describe('Realizar Login', () => {

    beforeEach(async () => {

        await HomePage.acessarPaginaLogin();

        await expect($(LoginPage.locators.loginTitle)).toHaveText('Login');
    });

    afterEach(async () => {

        await browser.terminateApp('com.saucelabs.mydemoapp.android');

        await browser.activateApp('com.saucelabs.mydemoapp.android');
    });

    it('Login com dados válidos', async () => {

        const user = User.gerarUsuario();

        await LoginPage.preencherUsuario(user);

        await LoginPage.preencherSenha(user);

        await LoginPage.clicarEnviar();

        await expect($(HomePage.locators.productsTitle)).toHaveText('Products');
    });

    it('Login com usuário inválido', async () => {

        const user = User.gerarUsuario();

        user.username = 'user';

        await LoginPage.preencherUsuario(user);

        await LoginPage.preencherSenha(user);

        await LoginPage.clicarEnviar();

        await expect($(LoginPage.locators.loginTitle)).toHaveText('Login');

        await expect($(HomePage.locators.productsTitle)).not.toExist();
    });

    it('Login com senha inválida', async () => {

        const user = User.gerarUsuario();

        user.password = '123';

        await LoginPage.preencherUsuario(user);

        await LoginPage.preencherSenha(user);

        await LoginPage.clicarEnviar();

        await expect($(LoginPage.locators.loginTitle)).toHaveText('Login');

        await expect($(HomePage.locators.productsTitle)).not.toExist();
    });

    it('Login com usuário não informado', async () => {

        const user = User.gerarUsuario();

        await LoginPage.preencherSenha(user);

        await LoginPage.clicarEnviar();

        await expect($(LoginPage.locators.userRequired)).toHaveText('Username is required');

        await expect($(LoginPage.locators.loginTitle)).toHaveText('Login');
    });

    it('Login com senha não informada', async () =>{

        const user = User.gerarUsuario();

        await LoginPage.preencherUsuario(user);

        await LoginPage.clicarEnviar();

        await expect($(LoginPage.locators.passwordRequired)).toHaveText('Enter Password');

        await expect($(LoginPage.locators.loginTitle)).toHaveText('Login');
    });

    it('Login com usuário bloqueado', async () => {

        const user = User.gerarUsuario();

        user.username = 'alice@example.com';

        user.password = '10203040';

        await LoginPage.preencherUsuario(user);

        await LoginPage.preencherSenha(user);

        await LoginPage.clicarEnviar();

        await expect($(LoginPage.locators.userLockedOut)).toHaveText(expect.stringContaining('this user has been locked out'));

        await expect($(LoginPage.locators.loginTitle)).toHaveText('Login');
    });
});