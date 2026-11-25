import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import FormPage from '../pageobjects/FormPage.js';

import dropdownItems from '../fixtures/dropdownItens.json';

describe('Realizar Validações de Elementos do Formulário', () => {

    beforeEach(async () => {

        await HomePage.acessarForm();

        await expect($(FormPage.locators.formTitle)).toHaveText('Form components');
    });

    afterEach(async () => {

        await browser.terminateApp('com.wdiodemoapp');

        await browser.activateApp('com.wdiodemoapp');
    });

    it('Validação de correspondência de textos nos campos de entrada e saída', async () => {

        const text = 'text example';

        await FormPage.inserirTexto(text);

        await expect($(FormPage.locators.inputTextResult)).toHaveText(text);
    });

    it('Alternância de switch do estado desligado para ligado', async () => {

        await expect($(FormPage.locators.switchText)).toHaveText('Click to turn the switch ON');

        await FormPage.alternarSwitch();

        await expect($(FormPage.locators.switchText)).toHaveText('Click to turn the switch OFF');
    });

    dropdownItems.forEach(({item}) => {

    it(`Seleção de item no campo dropdown com validação do texto selecionado: ${item}`, async () => {

        await FormPage.selecionarItem(item);

        await expect($(FormPage.locators.dropdownTextResult)).toHaveText(item);
    });
    });

    it('Funcionamento de botão ativo com exibição de alerta', async () => {

        await FormPage.clicarBotaoAtivo();

        await expect($(FormPage.locators.buttonAlert)).toHaveText('This button is');

        await expect($(FormPage.locators.buttonAlertMessage)).toHaveText('This button is active');
    });

    it('Funcionamento de botão inativo sem exibição de alerta', async () => {

        await FormPage.clicarBotaoInativo();

        await expect($(FormPage.locators.buttonAlert)).not.toExist();

        await expect($(FormPage.locators.buttonAlertMessage)).not.toExist();
    });
});