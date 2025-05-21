/// <reference types="cypress" />

// Test suite for mocking HTTP responses in Cypress
describe('Mocking HTTP respons', function () {
    it('First HTTP Mocking', () => {

        // Visit the Angular app demo page
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Intercept the GET request to the specified URL and mock the response
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200, // Mock a successful response
                body: [{         // Mocked response body: an array with one book object
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "asile": "2301"
                }]
            }).as('bookretrievals') // Alias this intercept for later reference

        // Click the button to trigger the HTTP request
        cy.get("button[class='btn btn-primary']").click();

        // Wait for the intercepted request and validate the UI
        cy.wait('@bookretrievals').then(({ request, response }) => {
            // Assert that the number of table rows equals the number of books + 1 (header row)
            cy.get('tr').should('have.length', response.body.length + 1);
        })
    })
})