import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage } from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
    commonPage.visitLink(url);
});

Given("I check that the url doesn't include the endpoint {string}", (endpoint) => {
    commonPage.checkUrlnotInclude(endpoint);
});

Given("I check that the url include the endpoint {string}", (endpoint) => {
    commonPage.checkUrlInclude(endpoint);
});

Given("I click on the button with data-test {string}", (buttonByDataTest) => {
    commonPage.clickButtonByDataTest(buttonByDataTest);
});

Given("I type in the text box with data test {string} the text {string}", (texBoxByDataText, text) => {
    commonPage.typeInTextBoxByDataTest(texBoxByDataText, text);
});

//Exercises steps

Given("I check if the following text {string} is in the body of the page", (text) => {
    commonPage.checkBodyContainsText(text);
})

Given("I check if the following text {string} is not in the body of the page", (text) => {
    commonPage.checkBodyNotContainsText(text);
})

Given("I find an element by its class {string}", (elementByClass) => {
    commonPage.getElementByClass(elementByClass);
});


