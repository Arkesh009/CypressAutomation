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
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text() === "India"){
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        // hide/show item
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button
        cy.get('[value="radio1"]').check().should('be.checked')
    })
})