// cypress spec1
/// <refrence types="Cypress" />

describe('My Second Test Suite', function () {
    it('My firstTest case', function () {
        // test step
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2500);

        // perent child chaining
        cy.get('.products').as('productlocator')
        // running each loop to find the target (cachews)
        cy.get('@productlocator').find('.product').each(($e1, index, $list) => {
            // assigning value of $e1 to the variable with each iteration
            const textVeg = $e1.find('h4.product-name').text()
            // check if textVeg == cashews
            if (textVeg.includes('Cashews')) {
                cy.wrap($e1).find('button').click(); // find the button and click
            }
        });

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains("Place Order").click(); // Use a more specific selector


    });
    
}
);