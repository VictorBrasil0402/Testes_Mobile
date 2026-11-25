import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import LoginPage from '../pageobjects/LoginPage.js';

import ProdutoPage from '../pageobjects/ProdutoPage.js';

import CarrinhoPage from '../pageobjects/CarrinhoPage.js';

import CheckoutPage from '../pageobjects/CheckoutPage.js';

import CheckoutPagamentoPage from '../pageobjects/CheckoutPagamentoPage.js';

import CheckoutResumoPage from '../pageobjects/CheckoutResumoPage.js';

import CheckoutCompletoPage from '../pageobjects/CheckoutCompletoPage.js';

import User from '../fixtures/User.js';

describe('Realizar Compra de Produto', () => {

    it('Compra de produto com dados válidos', async () => {

        const user = User.gerarUsuario();

        await HomePage.acessarPaginaLogin();

        await LoginPage.preencherUsuario(user);
        
        await LoginPage.preencherSenha(user);

        await LoginPage.clicarEnviar();

        await expect($(HomePage.locators.productsTitle)).toHaveText('Products');

        await HomePage.selecionarProduto();

        await ProdutoPage.adicionarProdutoCarrinho();

        await expect($(ProdutoPage.locators.cartBadge)).toHaveText('1');

        await ProdutoPage.acessarCarrinho();

        await expect($(CarrinhoPage.locators.cartTitle)).toHaveText('My Cart');

        const totalQuantityValue = await CarrinhoPage.obterQuantidadeTotal();

        const totalPriceValue = await CarrinhoPage.obterPrecoTotal();

        await CarrinhoPage.acessarCheckout();

        await expect($(CheckoutPage.locators.checkoutTitle)).toHaveText('Checkout');

        await CheckoutPage.preencherDadosPessoais(user);

        await CheckoutPage.acessarPaginaPagamento();

        await CheckoutPagamentoPage.preencherDadosPagamento(user);

        await CheckoutPagamentoPage.clicarRevisarPedido();

        await CheckoutResumoPage.visualizarResumoPedido();

        const deliveryCostValue = await CheckoutResumoPage.obterPrecoDelivery();

        const totalCostValue = await CheckoutResumoPage.obterPrecoPedido();

        const expectedTotal = Number(((totalQuantityValue * totalPriceValue) + deliveryCostValue).toFixed(2));

        expect(totalCostValue).toBeCloseTo(expectedTotal, 2);

        await CheckoutResumoPage.clicarRealizarPedido();

        await expect($(CheckoutCompletoPage.locators.checkoutCompleteTitle)).toHaveText('Checkout Complete');

        await expect($(CheckoutCompletoPage.locators.orderConfirmationTitle)).toHaveText('Thank you for your order');
    });
});