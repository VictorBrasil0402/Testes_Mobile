import {$} from '@wdio/globals';

class SignUpComponent{

    constructor(){

        this.locators = {

            signUpOption: '~button-sign-up-container',

            email: '~input-email',

            password: '~input-password',

            passwordConfirmation: '~input-repeat-password',

            signUpButton: '~button-SIGN UP',

            successAlert: '//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title" and @text="Signed Up!"]',

            sucessMessage: '//android.widget.TextView[@resource-id="android:id/message" and @text="You successfully signed up!"]',

            invalidAddress: '//android.widget.TextView[@text="Please enter a valid email address"]',

            invalidPassword: '//android.widget.TextView[@text="Please enter at least 8 characters"]',

            invalidPasswordConfirmation: '//android.widget.TextView[@text="Please enter the same password"]'
        };
    }

    async selecionarOpcaoCadastro(){

        await $(this.locators.signUpOption).click();
    }

    async preencherEmail(user){

        await $(this.locators.email).setValue(user.email);
    }

    async preencherSenha(user){

        await $(this.locators.password).setValue(user.password);
    }

    async confirmarSenha(user){

        await $(this.locators.passwordConfirmation).setValue(user.passwordConfirmation);
    }

    async clicarCadastrar(){

        await $(this.locators.signUpButton).click();
    }
}

export default new SignUpComponent();