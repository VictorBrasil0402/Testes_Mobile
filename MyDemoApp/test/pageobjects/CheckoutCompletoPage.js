class CheckoutCompletoPage{

    constructor(){

        this.locators = {

            checkoutCompleteTitle: 'id=com.saucelabs.mydemoapp.android:id/completeTV',

            orderConfirmationTitle: 'id=com.saucelabs.mydemoapp.android:id/thankYouTV'
        };
    }
}

export default new CheckoutCompletoPage();