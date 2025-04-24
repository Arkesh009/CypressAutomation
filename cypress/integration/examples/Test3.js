// cypress spec1
/// <refrence types="Cypress" />

describe('My 3rd test suite', function () {
    it('First test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked')
    })
})