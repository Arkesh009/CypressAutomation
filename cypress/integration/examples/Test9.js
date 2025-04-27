/// <reference types="cypress" /> 
/// <reference types="cypress-iframe" />

// Import the Cypress iframe plugin
import 'cypress-iframe'

// Test suite for handling iframe interactions
describe('My 9th test suite', () => {
    // Test case for interacting with elements inside an iframe
    it('Testing frames', () => {
        // Visit the practice page containing the iframe
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Ensure the iframe with the specified ID is fully loaded
        cy.frameLoaded("#courses-iframe")

        // Switch to the iframe context and click the first "Mentorship" link
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        // Verify that there are exactly 2 <h1> elements with a class containing 'pricing-title' inside the iframe
        cy.iframe().find("h1[class*= 'pricing-title']").should('have.length', 2)
    })
})