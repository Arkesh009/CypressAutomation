// cypress spec1
/// <refrence types="Cypress" />

describe('My first Test Suite', function () {
    it('My firstTest case', function () {
        // test step
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2500);
        cy.get('.product:visible').should('have.length', 4);
        // perent child chaining
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4);
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf');
        });

        // running each loop to find the target (cachews)
        cy.get('@productlocator').find('.product').each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text() // assigning value of $e1 to the variable with each iteration
            // check if textVeg == cashews
            if (textVeg.includes('Cashews')) {
                cy.wrap($e1).find('button').click(); // find the button and click
            }
        });

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART');

        // to print in logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text());
        });

    });

    // it('My secondtest case', function(){
    //     // test step
    // });
}
);