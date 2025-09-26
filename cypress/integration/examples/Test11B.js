/// <reference types="cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
// import loginPage from '../../support/pageObjects/LoginPage'

// Test suite for E2E testing of an e-commerce application
describe('E2E Ecommerce Test', () => {

    // Runs only once before any test in the block
    before(function () {
        // Load test data from the fixture file and initialize the HomePage object
        cy.fixture('example').then(function (data) {
            this.data = data // Store the fixture data in `this.data`
            this.homepage = new HomePage() // Initialize the HomePage object
            // this.loginpage = new loginPage()
        })
    })

    it('Order submission', function () {

        // Define the product name to be added to the cart
        const productName = this.data.productName

        // Visit the login page
        this.homepage.goTo(Cypress.env('url')+"/loginpagePractise/#")

        // Enter the username and password
        const productPage = this.homepage.login(this.data.username, this.data.password)

        // Verify that the "Shop Name" heading is visible after login
        productPage.pageValidation()

        // Pause the test for debugging purposes
        

        // Verify that there are exactly 4 product cards displayed
        productPage.verifyCardLimit().should('have.length', 4)

        // Find the product card containing the specified product name
        productPage.selectProduct(productName)

        // Add the first product card to the cart
        productPage.selectFirstProduct()

        // Click the "Checkout" link to proceed to the cart
        const cartPage = productPage.goToCart()

        // Calculate the total sum of product prices and verify it is less than 200000
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000)
        })

        // Proceed to the confirmation page after checking out items
        const ConfirmationPage = cartPage.checkOutItems()

        // Submit the delivery form details
        ConfirmationPage.submitFormDetails()

        // Verify that the success message is displayed
        ConfirmationPage.getAlertMessage().should('contain', 'Success')

        // Initialize a variable to store the total sum of product prices
        // (This step is already handled in `cartPage.sumOfProducts()`)

        // Click the "Checkout" button to proceed to the delivery page
        // (This step is already handled in `cartPage.checkOutItems()`)

        // Enter the delivery country
        // (This step is already handled in `ConfirmationPage.submitFormDetails()`)

        // Verify that the success message is displayed
        // (This step is already handled in `ConfirmationPage.getAlertMessage()`)
    })
})