/// <reference types="cypress" />
describe('Mocking HTTP respons', function(){
    it('First HTTP Mocking', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [{
                "book_name" : "RestAssured with Java",
                "isbn" : "RSU",
                "asile" : "2301"
            }]
        }).as('bookretrievals')

        cy.get("button[class='btn btn-primary']").click();

        cy.wait('@bookretrievals').then(({request, response}) => 
        {
            cy.get('tr').should('have.length', response.body.length + 1);
        })
    })
})