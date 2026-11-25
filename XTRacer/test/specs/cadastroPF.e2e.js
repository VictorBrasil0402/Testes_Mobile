import {faker} from '@faker-js/faker';

import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import CadastroPage from '../pageobjects/CadastroPage.js';

import UsuarioPF from '../fixtures/UsuarioPF.js';

describe('Realizar Cadastro de Pessoa Física', () => {

    beforeEach(async () => {

        await HomePage.abrir();

        await browser.deleteAllCookies();

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaCadastro();

        await expect($(CadastroPage.locators.titulo)).toHaveText(expect.stringContaining('Cadastro de novo cliente'));
    });

    it('Cadastro de usuário PF com dados válidos', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect(browser).toHaveTitle(expect.stringContaining('Seu cadastro foi efetuado com sucesso!'));
    });

    it('Cadastro de usuário PF com nome completo inválido', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.nomeCompleto = '291% 724$';

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroNomeCompleto)).toHaveText('Digite o seu nome completo, por favor.');

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PF com data de nascimento inválida', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.dataNascimento = '05141992';

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroDataNascimento)).toHaveText('Data de nascimento inválida.');

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PF com CPF inválido', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.cpf = '54758214345';

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroCpf)).toHaveText(expect.stringContaining('CPF inválido!'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PF com número de telefone celular inválido', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.celular = '19624635672';

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroCelular)).toHaveText(expect.stringContaining('Telefone Celular'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    const emailFormatoInvalido = [

        `usuario${faker.string.alphanumeric(8)}@`,
        `usuario${faker.string.alphanumeric(8)}@email`,
        `@usuario${faker.string.alphanumeric(8)}`
    ];

    emailFormatoInvalido.forEach((email) => {

    it(`Cadastro de usuário PF com formato de e-mail inválido: ${email}`, async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.email = email;

        usuario.confirmacaoEmail = usuario.email;
        
        const campoEmail = await $(CadastroPage.pessoaFisica.locators.email);
        const campoConfirmacaoEmail = await $(CadastroPage.pessoaFisica.locators.confirmacaoEmail);

        await browser.execute((el1, el2) => {
            const form = document.querySelector('form');
            if (form) {
                form.setAttribute('novalidate', 'novalidate');
            }
            
            if (el1) el1.type = 'text';
            if (el2) el2.type = 'text';
        }, campoEmail, campoConfirmacaoEmail);

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await browser.waitUntil(async () => {

            try {
                const text = await browser.getAlertText();
                return text && text.length > 0;
            } 

            catch {
                return false;
            }
        }, 
        { 
            timeout: 10000, 
            message: 'O alerta do sistema não foi exibido após o clique.' 
        });

        const mensagemAlerta = await browser.getAlertText();

        expect(mensagemAlerta).toContain('Por favor, digite o e-mail corretamente.');

        await browser.acceptAlert();

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });
    });

    it('Cadastro de usuário PF com confirmação de e-mail diferente', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.confirmacaoEmail = 'usuario0341@live.com';

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroConfirmacaoEmail)).toHaveText(expect.stringContaining('A confirmação de e-mail está diferente do e-mail digitado.'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PF com senha inválida', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.senha = '73856423';

        usuario.confirmacaoSenha = usuario.senha;

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroSenha)).toHaveText(expect.stringContaining('Sua senha deve cumprir os seguintes requisitos:'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PF com confirmação de senha diferente', async () => {

        const usuario = UsuarioPF.pessoaFisica();

        usuario.confirmacaoSenha = '67027654z';

        await CadastroPage.pessoaFisica.preencherFormulario(usuario);

        await CadastroPage.pessoaFisica.clicarCadastrar();

        await expect($(CadastroPage.pessoaFisica.locators.erroConfirmacaoSenha)).toHaveText(expect.stringContaining('Sua senha está diferente da confirmação.'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });
});    
        
    
