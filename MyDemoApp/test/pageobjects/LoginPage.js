import {$} from '@wdio/globals';

class LoginPage{

    constructor(){

        this.locators = {

            loginTitle: 'id=com.saucelabs.mydemoapp.android:id/loginTV',

            username: 'id=com.saucelabs.mydemoapp.android:id/nameET',

            password: 'id=com.saucelabs.mydemoapp.android:id/passwordET',

            loginButton: 'id=com.saucelabs.mydemoapp.android:id/loginBtn',

            userRequired: '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/nameErrorTV" and @text="Username is required"]',

            passwordRequired: '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV" and @text="Enter Password"]',

            userLockedOut: '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV" and contains(@text, "locked out")]'
        };
    }

    async preencherUsuario(user){

        await $(this.locators.username).setValue(user.username);
    }

    async preencherSenha(user){

        await $(this.locators.password).setValue(user.password);
    }

    async clicarEnviar(){

        await $(this.locators.loginButton).click();
    }
}

export default new LoginPage();