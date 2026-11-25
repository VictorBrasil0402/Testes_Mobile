import {$} from '@wdio/globals';

class FormPage{

    constructor(){

        this.locators = {

            formTitle: '//android.widget.TextView[@text="Form components"]',

            inputField: '~text-input',

            inputTextResult: '~input-text-result',

            switch: '~switch',

            switchText: '~switch-text',

            dropdown: '~Dropdown',

            dropdownTextResult: '//android.widget.EditText[@resource-id="text_input"]',

            activeButton: '~button-Active',

            inactiveButton: '~button-Inactive',

            buttonAlert: '//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title" and @text="This button is"]',

            buttonAlertMessage: '//android.widget.TextView[@resource-id="android:id/message" and @text="This button is active"]'
        };
    }

    async inserirTexto(text){

        await $(this.locators.inputField).setValue(text);
    }

    async alternarSwitch(){

        await $(this.locators.switch).click();
    }

    async selecionarItem(text){

        await $(this.locators.dropdown).click();

        await $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${text}"]`).click();
    }

    async clicarBotaoAtivo(){

        await $(this.locators.activeButton).click();
    }

    async clicarBotaoInativo(){

        await $(this.locators.inactiveButton).click();
    }
}

export default new FormPage();