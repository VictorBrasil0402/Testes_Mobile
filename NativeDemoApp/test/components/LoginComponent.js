import {$} from '@wdio/globals';

class LoginComponent{

    constructor(){

        this.locators = {

            email: '~input-email',

            password: '~input-password',

            loginButton: '~button-LOGIN',

            successAlert: '//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title" and @text="Success"]',

            successMessage: '//android.widget.TextView[@resource-id="android:id/message" and @text="You are logged in!"]',

            invalidAddress: '//android.widget.TextView[@text="Please enter a valid email address"]',

            invalidPassword: '//android.widget.TextView[@text="Please enter at least 8 characters"]'
        };
    }

    async preencherEmail(user){

        await $(this.locators.email).setValue(user.email);
    }

    async preencherSenha(user){

        await $(this.locators.password).setValue(user.password);
    }

    async clicarEnviar(){

        await $(this.locators.loginButton).click();
    }
}

export default new LoginComponent();