/// <reference types="Cypress" />
// Cypress IntelliSense support for autocompletion and documentation

// Test suite for handling child window operations
describe("My 8th test suite", () => {
    it('Handling Child window operations', () => {
        // Visit the practice page containing the "Open Tab" link
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Get the "Open Tab" link and extract its 'href' property
        cy.get('#opentab').then((el) => {
            const url = el.prop('href') // Extract the URL from the 'href' attribute

            // Navigate to the extracted URL in the same tab
            cy.visit(url)

            // Handle cross-origin navigation using cy.origin
            cy.origin(url, () => {
                // Click on the "About" link in the sub-menu bar
                cy.get("div.sub-menu-bar a[href*='about']").click()
            })
        })
    })
})