import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import AutenticacaoPage from '../pageobjects/AutenticacaoPage.js';

import User from '../fixtures/User.js';

import {faker} from '@faker-js/faker';

describe('Realizar Cadastro', () => {

    beforeEach(async () => {

        await HomePage.acessarPaginaAutenticacao();

        await expect($(AutenticacaoPage.locators.title)).toHaveText('Login / Sign up Form');
    });

    afterEach(async () => {

        await browser.terminateApp('com.wdiodemoapp');

        await browser.activateApp('com.wdiodemoapp');
    });

    it('Cadastro de usuário com dados válidos', async () => {

        const user = User.gerarUsuario();

        await AutenticacaoPage.signUp.selecionarOpcaoCadastro();

        await AutenticacaoPage.signUp.preencherEmail(user);

        await AutenticacaoPage.signUp.preencherSenha(user);

        await AutenticacaoPage.signUp.confirmarSenha(user);

        await AutenticacaoPage.signUp.clicarCadastrar();

        await expect($(AutenticacaoPage.signUp.locators.successAlert)).toHaveText('Signed Up!');

        await expect($(AutenticacaoPage.signUp.locators.sucessMessage)).toHaveText('You successfully signed up!');
    });

    const emailFormatoInvalido = [

        `user${faker.string.alphanumeric(8)}@`,
        `user${faker.string.alphanumeric(8)}@email`,
        `@user${faker.string.alphanumeric(8)}`
    ];

    emailFormatoInvalido.forEach((email) => {

    it(`Cadastro de usuário com formato de e-mail inválido: ${email}`, async () => {

        const user = User.gerarUsuario();

        user.email = email;

        await AutenticacaoPage.signUp.selecionarOpcaoCadastro();

        await AutenticacaoPage.signUp.preencherEmail(user);

        await AutenticacaoPage.signUp.preencherSenha(user);

        await AutenticacaoPage.signUp.confirmarSenha(user);

        await AutenticacaoPage.signUp.clicarCadastrar();

        await expect($(AutenticacaoPage.signUp.locators.invalidAddress)).toHaveText('Please enter a valid email address');
    });
    });

    it('Cadastro de usuário com senha inválida', async () => {

        const user = User.gerarUsuario();

        user.password = '123';

        user.passwordConfirmation = user.password;

        await AutenticacaoPage.signUp.selecionarOpcaoCadastro();

        await AutenticacaoPage.signUp.preencherEmail(user);

        await AutenticacaoPage.signUp.preencherSenha(user);

        await AutenticacaoPage.signUp.confirmarSenha(user);

        await AutenticacaoPage.signUp.clicarCadastrar();

        await expect($(AutenticacaoPage.signUp.locators.invalidPassword)).toHaveText('Please enter at least 8 characters');
    });
    
    it('Cadastro de usuário com confirmação de senha diferente', async () => {

        const user = User.gerarUsuario();

        user.passwordConfirmation = '12345678m';

        await AutenticacaoPage.signUp.selecionarOpcaoCadastro();

        await AutenticacaoPage.signUp.preencherEmail(user);

        await AutenticacaoPage.signUp.preencherSenha(user);

        await AutenticacaoPage.signUp.confirmarSenha(user);

        await AutenticacaoPage.signUp.clicarCadastrar();

        await expect($(AutenticacaoPage.signUp.locators.invalidPasswordConfirmation)).toHaveText('Please enter the same password');
    });
});