import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { ShoppingCartPage } from "../pages/shoppingCartPage"

//Instancias de clase
let shoppingCartPage = new ShoppingCartPage();

Given("Inventory item does not exist on page", () => {
    shoppingCartPage.inventoryItemNotExist();
})

Given("Inventory item is visible on page", () => {
    shoppingCartPage.inventoryItemIsVisible();
})