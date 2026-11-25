import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import LoginPage from '../pageobjects/LoginPage.js';

import PerfilPage from '../pageobjects/PerfilPage.js';

import ProdutosPage from '../pageobjects/ProdutosPage.js';

import ProdutoPage from '../pageobjects/ProdutoPage.js';

import CheckoutPage from '../pageobjects/CheckoutPage.js';

import CheckoutLoginPage from '../pageobjects/CheckoutLoginPage.js';

import CheckoutResumoPage from '../pageobjects/CheckoutResumoPage.js';

describe('Selecionar Produtos', () => {

    beforeEach(async () => {

        await HomePage.abrir();

        await browser.deleteAllCookies();

        await browser.execute(() =>{

            window.localStorage.clear();

            window.sessionStorage.clear();
        });

        await browser.refresh();
    });

    it('Seleção de produto com dados válidos', async () => {
        
        const usuario = {

            email: process.env.TEST_EMAIL,

            senha: process.env.TEST_PASSWORD,

            cep: process.env.TEST_CEP
        };

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaLogin();

        await expect(browser).toHaveUrl(expect.stringContaining('login'));

        await LoginPage.abrirFormularioLogin();

        await LoginPage.preencherEmail(usuario);
        
        await LoginPage.clicarContinuar();

        await LoginPage.preencherSenha(usuario);

        await LoginPage.clicarEnviar();

        await expect(browser).toHaveUrl(expect.stringContaining('my-account'));

        await PerfilPage.voltarParaHome();

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaProdutos();

        await ProdutosPage.abrirFiltros();

        await ProdutosPage.selecionarFiltro('XT Office');

        await ProdutosPage.clicarFiltrar();

        await ProdutosPage.selecionarProduto();

        await ProdutoPage.clicarComprar();

        await ProdutoPage.clicarFinalizarCompra();

        const campoIdentificadorCheckout = await $(CheckoutLoginPage.locators.campoIdentificador);

        const campoVisivel = await campoIdentificadorCheckout.isDisplayed().catch(() => false);

        if (campoVisivel){
            await CheckoutLoginPage.preencherEmail(usuario);
            await CheckoutLoginPage.clicarContinuar();
        }

        await CheckoutResumoPage.clicarVoltar();

        await expect(browser).toHaveUrl(expect.stringContaining('#carrinho'));

        const botaoAlterarCEP = await $(CheckoutPage.locators.botaoAlterarCEP);

        const botaoVisivel = await botaoAlterarCEP.isDisplayed().catch(() => false);

        if (botaoVisivel){
            await CheckoutPage.clicarAlterarCEP();
        }

        await CheckoutPage.preencherCEP(usuario);

        await CheckoutPage.clicarContinuar();

        await expect(browser).toHaveUrl(expect.stringContaining('#principal'));

        await expect($(CheckoutResumoPage.locators.tituloResumo)).toHaveText('Resumo do pedido');
    });

    it('Seleção de produto com CEP inválido', async () => {

        const usuario = {

            email: process.env.TEST_EMAIL,

            senha: process.env.TEST_PASSWORD,

            cep: '23232323'
        };

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaLogin();

        await expect(browser).toHaveUrl(expect.stringContaining('login'));

        await LoginPage.abrirFormularioLogin();

        await LoginPage.preencherEmail(usuario);
        
        await LoginPage.clicarContinuar();

        await LoginPage.preencherSenha(usuario);

        await LoginPage.clicarEnviar();

        await expect(browser).toHaveUrl(expect.stringContaining('my-account'));

        await PerfilPage.voltarParaHome();

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaProdutos();

        await ProdutosPage.selecionarProduto();

        await ProdutoPage.clicarComprar();

        await ProdutoPage.clicarFinalizarCompra();

        const campoIdentificadorCheckout = await $(CheckoutLoginPage.locators.campoIdentificador);

        const campoVisivel = await campoIdentificadorCheckout.isDisplayed().catch(() => false);

        if (campoVisivel){
            await CheckoutLoginPage.preencherEmail(usuario);
            await CheckoutLoginPage.clicarContinuar();
        }

        await CheckoutResumoPage.clicarVoltar();

        await expect(browser).toHaveUrl(expect.stringContaining('#carrinho'));

        const botaoAlterarCEP = await $(CheckoutPage.locators.botaoAlterarCEP);

        const botaoVisivel = await botaoAlterarCEP.isDisplayed().catch(() => false);

        if (botaoVisivel){
            await CheckoutPage.clicarAlterarCEP();
        }

        await CheckoutPage.preencherCEP(usuario);

        await CheckoutPage.clicarContinuar();

        await expect($(CheckoutPage.locators.erroCep)).toHaveText(expect.stringContaining('Não foi possível carregar seu endereço'));

        await expect(browser).toHaveUrl(expect.stringContaining('#carrinho'));
    });

    it('Seleção de produto com estoque indisponível', async () => {

        await HomePage.abrirMenuMobile();

        await HomePage.acessarPaginaProdutos();

        await ProdutosPage.selecionarUltimaPagina();

        await ProdutosPage.selecionarProdutoIndisponivel();

        await expect($(ProdutoPage.locators.legendaProdutoIndisponivel)).toHaveText(expect.stringContaining('Não disponível'));
    });
});