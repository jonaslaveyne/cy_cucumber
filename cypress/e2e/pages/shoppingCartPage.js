import { CommonPage } from "./commonPage";

export class ShoppingCartPage extends CommonPage {

    inventoryItemNotExist() {
        cy.get('[class="inventory-item"]').should('not.exist')
    }

    inventoryItemIsVisible() {
        cy.get('[class="inventory-item"]').should('be.visible')
    }

}