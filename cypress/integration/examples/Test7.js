/// <reference types="Cypress" />
// Cypress IntelliSense support for autocompletion and documentation

// Test suite for handling mouse hover events
// Note: Cypress does not natively support mouse hover events; use jQuery or force click as a workaround
describe('My 7th test suite', () => {
    it('Mouse hover test case', () => {
        // Visit the practice page containing the mouse hover element
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Click on the "Top" option under the mouse hover menu using force click
        cy.contains('Top').click({force: true})

        // Verify that the URL includes the word 'top' after clicking
        cy.url().should('include', 'top')
    })
})