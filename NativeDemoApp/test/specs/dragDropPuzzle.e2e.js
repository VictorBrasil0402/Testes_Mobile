import {expect} from '@wdio/globals';

import HomePage from '../pageobjects/HomePage.js';

import DragPage from '../pageobjects/DragPage.js';

describe('Completar Puzzle com Drag and Drop', () => {

    beforeEach(async () => {

        await HomePage.acessarDrag();

        expect($(DragPage.locators.title)).toHaveText('Drag and Drop');
    });

    it('Execução do Puzzle', async () => {

        await DragPage.arrastarBlocos();

        await expect($(DragPage.locators.successTitle)).toHaveText('Congratulations');

        await expect($(DragPage.locators.sucessMessage)).toHaveText('You made it, click retry if you want to try it again.');
    });
});