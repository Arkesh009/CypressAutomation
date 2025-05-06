/// <reference types="cypress" />

// Test suite for mocking HTTP requests
describe('Mocking HTTP request', function () {

    // Test case for intercepting and modifying an HTTP request
    it('Second HTTP Mocking', () => {

        // Visit the application URL
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Intercept the GET request to the specified URL
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                // Modify the request URL (optional, in this case, it's the same as the original)
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"

                // Continue the request and validate the response
                req.continue((res) => {
                    // Assert that the response status code is 403 (Forbidden)
                    expect(res.statusCode).to.equal(403)
                })
            }
        ).as('dummyURL') // Assign an alias to the intercepted request

        // Click the button to trigger the GET request
        cy.get("button[class='btn btn-primary']").click();

        // Wait for the intercepted request to complete
        cy.wait('@dummyURL')
    })
})