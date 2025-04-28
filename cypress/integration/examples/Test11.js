/// <reference types="cypress"/>

// Test suite for E2E testing of an e-commerce application
describe('E2E Ecommerce Test', () => {

    // runs only once before any test in the block
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Order submission', function() {

        // Visit the login page
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")

        // Enter the username and password
        cy.get('#username').type(this.data.username) // Input username
        cy.get('#password').type(this.data.password) // Input password

        // Click the "Sign In" button
        cy.contains('Sign In').click()

        // Verify that the "Shop Name" heading is visible after login
        cy.contains('Shop Name').should('be.visible')

        // Verify that there are exactly 4 product cards displayed
        cy.get('app-card').should('have.length', 4)

        // Define the product name to be added to the cart
        const productName = this.data.productName

        // Find the product card containing the specified product name
        cy.get('app-card').filter(`:contains("${productName}")`).then($element => {
            // Ensure that exactly one product card matches the specified name
            cy.wrap($element).should('have.length', 1)

            // Click the "Add" button on the matching product card
            cy.wrap($element).contains('button', 'Add').click()
        })

        // Add the first product card to the cart
        cy.get('app-card').eq(0).contains('button', 'Add').click()

        // Click the "Checkout" link to proceed to the cart
        cy.contains('a', 'Checkout').click()

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
        cy.wait(8000)

        // Select the first suggestion from the dropdown
        cy.get(".suggestions ul li a").click()

        // Click the "Purchase" button to complete the order
        cy.get(".btn-success").click()

        // Verify that the success message is displayed
        cy.get(".alert-success").should('contain', 'Success')
    })
})