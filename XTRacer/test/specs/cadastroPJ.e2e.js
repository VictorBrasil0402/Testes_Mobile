import {faker} from '@faker-js/faker';

import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import CadastroPage from '../pageobjects/CadastroPage.js';

import UsuarioPJ from '../fixtures/UsuarioPJ.js';

describe('Realizar Cadastro de Pessoa Jurídica', () => {

    beforeEach(async () => {

        await HomePage.abrir();

        await browser.deleteAllCookies();

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaCadastro();

        await expect($(CadastroPage.locators.titulo)).toHaveText(expect.stringContaining('Cadastro de novo cliente'));
    });

    it('Cadastro de usuário PJ com dados válidos', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect(browser).toHaveTitle(expect.stringContaining('Seu cadastro foi efetuado com sucesso!'));
    });

    it('Cadastro de usuário PJ com Razão Social inválida', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.razaoSocial = '567# 387$';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroRazaoSocial)).toHaveText('Para cadastro de pessoa jurídica é necessário a Razão Social.');

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PJ com Inscrição Estadual inválida', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.inscricaoEstadual = 'empresa412 exemplo65';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroInscricaoEstadual)).toHaveText('Para cadastro de pessoa jurídica, preencha o campo Inscrição Estadual');

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PJ com CNPJ inválido', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.cnpj = '54258693652783';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroCnpj)).toHaveText('CNPJ inválido!');

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PJ com nome completo inválido', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.nomeCompleto = '*892 561%';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroNomeCompleto)).toHaveText('Digite o seu nome completo, por favor.');

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PJ com número de telefone celular inválido', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.celular = '12727956243';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroCelular)).toHaveText(expect.stringContaining('Telefone Celular'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    const emailFormatoInvalido = [

        `usuario${faker.string.alphanumeric(8)}@`,
        `usuario${faker.string.alphanumeric(8)}@email`,
        `@usuario${faker.string.alphanumeric(8)}`
    ];

    emailFormatoInvalido.forEach((email) => {

    it(`Cadastro de usuário PJ com formato de e-mail inválido: ${email}`, async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.email = email;

        usuario.confirmacaoEmail = usuario.email;

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        const campoEmail = await $(CadastroPage.pessoaJuridica.locators.email);
        const campoConfirmacaoEmail = await $(CadastroPage.pessoaJuridica.locators.confirmacaoEmail);

        await browser.execute((el1, el2) => {
            const form = document.querySelector('form');
            if (form) {
                form.setAttribute('novalidate', 'novalidate');
            }
            
            if (el1) el1.type = 'text';
            if (el2) el2.type = 'text';
        }, campoEmail, campoConfirmacaoEmail);

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

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

    it('Cadastro de usuário PJ com confirmação de e-mail diferente', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.confirmacaoEmail = 'usuario86945@icloud.com';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroConfirmacaoEmail)).toHaveText(expect.stringContaining('A confirmação de e-mail está diferente do e-mail digitado.'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PJ com senha inválida', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.senha = '68269461';

        usuario.confirmacaoSenha = usuario.senha;

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.erroSenha)).toHaveText(expect.stringContaining('Sua senha deve cumprir os seguintes requisitos:'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });

    it('Cadastro de usuário PJ com confirmação de senha diferente', async () => {

        const usuario = UsuarioPJ.pessoaJuridica();

        usuario.confirmacaoSenha = '63087241g';

        await CadastroPage.pessoaJuridica.clicarOpcaoPJ();

        await CadastroPage.pessoaJuridica.preencherFormulario(usuario);

        await CadastroPage.pessoaJuridica.clicarCadastrar();

        await expect($(CadastroPage.pessoaJuridica.locators.confirmacaoSenha)).toHaveText(expect.stringContaining('Sua senha está diferente da confirmação.'));

        await expect(browser).toHaveTitle(expect.stringContaining('Cadastro'));
    });
});
