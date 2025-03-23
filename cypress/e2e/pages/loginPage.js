import { CommonPage } from "./commonPage";

const usernameLocator = '[data-test="username"]'

export class LoginPage extends CommonPage {

    typeStandarUser() {
        cy.get(usernameLocator).type('standard_user');
    }

    typeCorrectPassword() {
        cy.get('[data-test="password"]').type('secret_sauce');
    }

    checkUrlIsNotMainPage() {
        cy.url().should('not.include', 'inventory.html');
    }

    clickLoginButton() {
        cy.get('[data-test="login-button"]').click();
    }

    correctLogin() {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.url().should('not.include', 'inventory.html');
        cy.get('[data-test="primary-header"]').should('not.exist');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
    }

    //BETTER PRACTICES


    typeUser(user) {
        cy.get('[data-test="username"]').type(user);
    }

    typePassword(password) {
        cy.get('[data-test="password"]').type(password);
    }

    acceptedUsernamesPresent() {
        cy.get('[data-test="login-credentials"]').should('contain', 'standard_user')
        cy.get('[data-test="login-credentials"]').should('contain', 'locked_out_user')
        cy.get('[data-test="login-credentials"]').should('contain', 'problem_user')
        cy.get('[data-test="login-credentials"]').should('contain', 'performance_glitch_user')
        cy.get('[data-test="login-credentials"]').should('contain', 'error_user')
        cy.get('[data-test="login-credentials"]').should('contain', 'visual_user')
    }

    loginNoUsername() {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist').and('have.text', 'Epic sadface: Username is required')
    }

    loginUsernameNoPassword() {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist').and('have.text', 'Epic sadface: Password is required')
    }

    loginIncorrectUsernamePasswordCombination() {
        cy.get('[data-test="username"]').type('standard');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }

    loginWithLockedOutUser() {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist').and('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }
}