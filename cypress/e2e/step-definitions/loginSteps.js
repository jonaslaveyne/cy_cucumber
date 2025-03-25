import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage } from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

const acceptedtUserNames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];


Given("I type standar user in login page", () => {
    loginPage.typeStandarUser();
});

Given("I type the correct password in login page", () => {
    loginPage.typeCorrectPassword();
});

Given("I check that url doesn't contain the endpoint inventory.html", () => {
    loginPage.checkUrlIsNotMainPage();
});

Given("I click on the login button", () => {
    loginPage.clickLoginButton();
});

Given("I login with valid user and password", () => {
    loginPage.correctLogin();
});

// Better practices

Given("I type the user name {string}", (user) => {
    loginPage.typeUser(user);
});

Given("I type the password {string}", (password) => {
    loginPage.typePassword(password);
});

// Ejercicios 24/03/2025 Jonas

Given("I search the usernames on the login page", () => {
    loginPage.acceptedUsernamesPresent();
});

Given("I do not type a username", () => {
    loginPage.loginNoUsername();
});

Given("I enter a valid username but no password", () => {
    loginPage.loginUsernameNoPassword();
})

Given("I enter an invalid username and a correct password", () => {
    loginPage.loginIncorrectUsernamePasswordCombination();
})

Given("I try to login with a locked out user", () => {
    loginPage.loginWithLockedOutUser();
})

// Ejercicios 24/03/2025 - soluciones Javi

Given("I check that all Accepted usernames appears in login page", () => {
    loginPage.checkAcceptedUsernames();
});

Given("I check that all user in the const accepterUserNames appears in login page", () => {
    loginPage.checkAcceptedUsernamesBetter();
});


Given("I check that the error message {string} appears", (errorMessage) => {
    loginPage.checkErrorMessages(errorMessage);
});


Given("I check that the user names in the const acceptedtUserNames appears in the login credentials element", () => {
    acceptedtUserNames.forEach(userNames => {
        loginPage.checkElementContains("login-credentials", userNames);
    })
});

Given("I check that the element login credentials contain the all the accepted users", () => {
    loginPage.checkElementContains("login-credentials", "standard_user");
    loginPage.checkElementContains("login-credentials", "locked_out_user");
    loginPage.checkElementContains("login-credentials", "problem_user");
    loginPage.checkElementContains("login-credentials", "performance_glitch_user");
    loginPage.checkElementContains("login-credentials", "error_user");
    loginPage.checkElementContains("login-credentials", "visual_user");
});

//------------------------------------------------------------------------------------------------------//