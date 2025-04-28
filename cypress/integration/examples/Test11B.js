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

        // Verify that there are exactly 4 product cards displayed
        productPage.verifyCardLimit()

        // Find the product card containing the specified product name
        productPage.selectProduct(productName)

        // Add the first product card to the cart
        productPage.selectFirstProduct()

        // Click the "Checkout" link to proceed to the cart
        const cartPage = productPage.goToCart()

        // Initialize a variable to store the total sum of product prices
        let sum = 0

        // Iterate through all product prices in the cart and calculate the total sum
        cy.get('tr td:nth-child(4) strong').each($el => {
            const amount = Number($el.text().split(" ")[1].trim()) // Extract and convert the price to a number
            sum += amount // Add the price to the total sum
            expect(sum).to.be.lessThan(200000) // Assert that the running total is less than 200000
        }).then(() => {
            // Assert that the final total sum is less than 200000 after the loop completes
            expect(sum).to.be.lessThan(200000)
        })

        // Click the "Checkout" button to proceed to the delivery page
        cy.contains('button', 'Checkout').click()

        // Enter the delivery country
        cy.get('#country').type("India")

        // Wait for the suggestions dropdown to load
        Cypress.config('defaultCommandTimeout', 10000)

        // Select the first suggestion from the dropdown
        cy.get(".suggestions ul li a").click()

        // Click the "Purchase" button to complete the order
        cy.get(".btn-success").click()

        // Verify that the success message is displayed
        cy.get(".alert-success").should('contain', 'Success')
    })
})