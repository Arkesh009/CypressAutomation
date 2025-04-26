/// <refrence types="Cypress" />
/// <refrence types="Cypress-iframe" />

import 'cypress-iframe'

describe('My 9th test suite', () => {
    it('Testing frames', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*= 'pricing-title']").should('have.length', 2)
    })
})