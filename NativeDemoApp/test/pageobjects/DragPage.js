import {$} from '@wdio/globals';

class DragPage{

    constructor(){

        this.locators = {

            title: '//android.widget.TextView[@text="Drag and Drop"]',

            dragL1: '~drag-l1',

            dragC1: '~drag-c1',

            dragR1: '~drag-r1',

            dragL2: '~drag-l2',

            dragC2: '~drag-c2',

            dragR2: '~drag-r2',

            dragL3: '~drag-l3',

            dragC3: '~drag-c3',

            dragR3: '~drag-r3',

            dropL1: '~drop-l1',

            dropC1: '~drop-c1',

            dropR1: '~drop-r1',

            dropL2: '~drop-l2',

            dropC2: '~drop-c2',

            dropR2: '~drop-r2',

            dropL3: '~drop-l3',

            dropC3: '~drop-c3',

            dropR3: '~drop-r3',

            successTitle: '//android.widget.TextView[@text="Congratulations"]',

            sucessMessage: '//android.widget.TextView[contains(@text, "You made it")]'
        };
    }

    async arrastarBlocos(){

        await $(this.locators.dragL1).dragAndDrop($(this.locators.dropL1));

        await $(this.locators.dragC1).dragAndDrop($(this.locators.dropC1));

        await $(this.locators.dragR1).dragAndDrop($(this.locators.dropR1));

        await $(this.locators.dragL2).dragAndDrop($(this.locators.dropL2));

        await $(this.locators.dragC2).dragAndDrop($(this.locators.dropC2));

        await $(this.locators.dragR2).dragAndDrop($(this.locators.dropR2));

        await $(this.locators.dragL3).dragAndDrop($(this.locators.dropL3));

        await $(this.locators.dragC3).dragAndDrop($(this.locators.dropC3));

        await $(this.locators.dragR3).dragAndDrop($(this.locators.dropR3));
    }
}

export default new DragPage();