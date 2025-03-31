Feature: Checkout Process test suite

    Background:
        #Esto es equivalente al beforeEach
        Given I visit "https://www.saucedemo.com/"
        When I login with valid user and password

    # Los Scenarios son los tests (lo que antes era "it")
    Scenario: Complete checkout process with two products in the cart
        Given I check that the element with data-test "add-to-cart-sauce-labs-backpack" should "exist"
        And I click on the element with data-test "add-to-cart-sauce-labs-backpack"
        And I check that the element with data-test "add-to-cart-sauce-labs-onesie" should "exist"
        And I click on the element with data-test "add-to-cart-sauce-labs-onesie"
        And I check that the element with data-test "shopping-cart-badge" should "be.visible"
        And I click on the element with data-test "shopping-cart-link"
        And I check that the element with data-test "inventory-item-name" contain the text "Sauce Labs Backpack"
        And I check that the element with data-test "inventory-item-name" contain the text "Sauce Labs Onesie"
        And I check that the element with data-test "shopping-cart-badge" contain the text "2"
        When I click on the element with data-test "checkout"
        And I check that the url include the endpoint "checkout-step-one.html"
        And I fill out the checkout form correctly and click on continue
        And I check on the checkout page that the price for the product "Sauce Labs Backpack" is "29.99"
        And I check on the checkout page that the price for the product "Sauce Labs Onesie" is "7.99"
        And I click on the element with data-test "finish"
        And I check that the url include the endpoint "checkout-complete.html"
        And I check that the element with data-test "checkout-complete-container" contain the text "Thank you for your order!"
        And I click on the element with data-test "back-to-products"
        And I check that the element with data-test "shopping-cart-badge" should "not.exist"