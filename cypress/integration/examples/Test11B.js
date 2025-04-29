/// <reference types="cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
// Test suite for E2E testing of an e-commerce application
describe('E2E Ecommerce Test', () => {

    // runs only once before any test in the block
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
            this.homepage = new HomePage()
        })
    })

    it('Order submission', function() {

        // Define the product name to be added to the cart
        const productName = this.data.productName

        // Visit the login page
        this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#")
        // Enter the username and password
        const productPage = this.homepage.login(this.data.username, this.data.password)

        // Verify that the "Shop Name" heading is visible after login
        productPage.pageValidation()
        cy.pause();
        // Verify that there are exactly 4 product cards displayed
        productPage.verifyCardLimit().should('have.length', 4)

        // Find the product card containing the specified product name
        productPage.selectProduct(productName)

        // Add the first product card to the cart
        productPage.selectFirstProduct()

        // Click the "Checkout" link to proceed to the cart
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then(function(sum){
            expect(sum).to.be.lessThan(200000)
        })

        const ConfirmationPage = cartPage.checkOutItems()
        ConfirmationPage.submitFormDetails()
        ConfirmationPage.getAlertMessage().should('contain', 'Success')
        // Initialize a variable to store the total sum of product prices
        

        // Click the "Checkout" button to proceed to the delivery page
        

        // Enter the delivery country
        

        // Verify that the success message is displayed
        //cy.get(".alert-success").should('contain', 'Success')
    })
})