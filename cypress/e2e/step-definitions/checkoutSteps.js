import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

// Clases importadas
import { CheckoutPage } from "../pages/checkoutPage"

//Instancias de clase
let checkoutPage = new CheckoutPage();

Given("I fill out the checkout form correctly and click on continue", () => {
    checkoutPage.correctCheckoutFormFilled();
});

Given("I check on the checkout page that the price for the product {string} is {string}", (productNameCheckout, productPriceCheckout) => {
    checkoutPage.checkPriceOnCheckout(productNameCheckout, productPriceCheckout);
});