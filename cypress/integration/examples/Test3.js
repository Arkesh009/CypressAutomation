// cypress spec1
/// <refrence types="Cypress" />

describe('My 3rd test suite', function () {
    it('First test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // CheckBoxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')

        // Static Dropdown
        cy.get('select').select('Option2').should('have.value', 'option2')

        // Dynamic Dropdown
        
    })
})