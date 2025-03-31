export class CommonPage {

    visitLink(url) {
        cy.visit(url);
    }

    checkUrlnotInclude(endpoint) {
        cy.url().should('not.include', endpoint);
    }

    checkUrlInclude(endpoint) {
        cy.url().should('include', endpoint);
    }

    clickButtonByDataTest(buttonByDataTest) {
        cy.get(`[data-test="${buttonByDataTest}"]`).click();
    }

    typeInTextBoxByDataTest(texBoxByDataText, text) {
        cy.get(`[data-test="${texBoxByDataText}"]`).type(text);
    }

    getElementByDataTest(elementByDataTest) {
        return cy.get(`[data-test="${elementByDataTest}"]`)
    }

    // Better practices

    clickElementByDataTest(elementByDataTest) {
        this.getElementByDataTest(elementByDataTest).click()
    }

    typeElementByDataTest(elementByDataTest, text) {
        this.getElementByDataTest(elementByDataTest).type(text)
    }

    checkElementContains(elementByDataTest, text) {
        this.getElementByDataTest(elementByDataTest).should('contain', text)
    }

    checkElementNotContains(elementByDataTest, text) {
        this.getElementByDataTest(elementByDataTest).should('not.contain', text)
    }

    clickElementByContent(elementByText) {
        cy.contains(elementByText).click()
    }

    clickButtonByText(text) {
        cy.get('inputbutton').contain(text).click()
    }

    // Exercises - function for body text, no body text and get element by class

    checkBodyContainsText(text) {
        cy.get('body').should('contain', text)
    }

    checkBodyNotContainsText(text) {
        cy.get('body').should('not.contain', text)
    }

    //for 'incomplete' functions it's better to use 'return' - a get element does not really do anything
    getElementByClass(elementByClass) {
        return cy.get(`[class="${elementByClass}"]`)
    }

    // Ejercicios 25/03/2025

    checkElementBydataTest(elementDataTest, assertion) {
        this.getElementByDataTest(elementDataTest).should(assertion)
    }
    checkBodyContainText(text) {
        cy.get('body').should('contain', text)
    }

    checkBodyNotContainText(text) {
        cy.get('body').should('not.contain', text)
    }

    checkBodyText(assertion, text) {
        cy.get('body').should(assertion, text)
    }

    getElementByClass(className) {
        return cy.get(`[class = "${className}"]`)
    }

    getElementByAttribute(attribute, className) {
        return cy.get(`[${attribute} = "${className}"]`)
    }

    /// Función para testear accesibilidad
    testAccesibilityInScreen() {
        cy.injectAxe();
        cy.checkA11y();
    }

    testAccesibilityOnElement(elementLocator) {
        cy.injectAxe();
        cy.checkA11y(elementLocator)
    }

    interceptHBOApiCall() {
        cy.intercept('**/ot_guard_logo.svg').as('hboCookies')
        cy.wait('@hboCookies', { timeout: 10000 })
    }

}