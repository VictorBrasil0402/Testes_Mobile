import {$} from '@wdio/globals';

class CheckoutResumoPage{

    constructor(){

        this.locators = {

            deliveryCost: 'id=com.saucelabs.mydemoapp.android:id/amountTV',

            totalCost: 'id=com.saucelabs.mydemoapp.android:id/totalAmountTV',

            placeOrderButton: 'id=com.saucelabs.mydemoapp.android:id/paymentBtn'
        };
    }

    async visualizarResumoPedido(){
    
        await browser.swipe({
        
            direction: 'up',
            duration: 500,
            percent: 0.5
        });
    }

    async obterPrecoDelivery(){

        const deliveryCost = await $(this.locators.deliveryCost).getText();

        return Number(deliveryCost.replace(/[^\d.]/g, ''));
    }

    async obterPrecoPedido(){

        const totalCost = await $(this.locators.totalCost).getText();

        return Number(totalCost.replace(/[^\d.]/g, ''));
    }

    async clicarRealizarPedido(){

        await $(this.locators.placeOrderButton).click();
    }
}

export default new CheckoutResumoPage();