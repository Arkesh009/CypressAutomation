/// <refrence types="Cypress" />
// Mouse hover events are not supported in cypress, instead use jquerry or force click
describe('My 7th test suite', () => {
    it('Mouse hover test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
    })
})