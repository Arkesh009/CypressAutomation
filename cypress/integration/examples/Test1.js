// cypress spec1
/// <refrence types="Cypress" />

describe('My first Test Suite', function()
{
    it('My firstTest case', function(){
        // test step
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length', 4);
    });

    // it('My secondtest case', function(){
    //     // test step
    // });
}
);