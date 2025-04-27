import { CommonPage } from "./commonPage";

const productCardCheckout = '[data-test="inventory-item-name"]';
const priceCheckout = '[data-test="inventory-item-price"]';

export class CheckoutPage extends CommonPage {


    // sé que puedo mejorarlo cambiando mi nombre, apellido y CP por variables pero ya no tengo tiempo :)
    correctCheckoutFormFilled() {
        cy.get('[data-test="firstName"]').type('Jonas');
        cy.get('[data-test="lastName"]').type('Laveyne');
        cy.get('[data-test="postalCode"]').type('29009');
        cy.url().should('include', 'checkout-step-one.html');
        cy.get('[data-test="continue"]').click();
        cy.url().should('include', 'checkout-step-two.html');
    }

    checkPriceOnCheckout(productNameCheckout, productPriceCheckout) {
        cy.contains(productCardCheckout, productNameCheckout).should('contain', productPriceCheckout);
    }
// El problema con la funcion checkPriceOnCheckout es que el contains te muee a donde está el texto, por eso no encuentras el precio, si la cambias así funcionará
/*
    checkPriceOnCheckout(productNameCheckout, productPriceCheckout) {
        cy.contains(productCardCheckout, productNameCheckout).should('contain', productPriceCheckout);
    }
    */
    
}






