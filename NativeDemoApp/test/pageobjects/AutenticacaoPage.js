import LoginComponent from '../components/LoginComponent.js';

import SignUpComponent from '../components/SignUpComponent.js';

class AutenticacaoPage{

    constructor(){

        this.locators = {

            title: '//android.widget.TextView[@text="Login / Sign up Form"]'
        };

        this.login = LoginComponent;

        this.signUp = SignUpComponent;
    }
}

export default new AutenticacaoPage();