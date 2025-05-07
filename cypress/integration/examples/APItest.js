/// <reference types="cypress" />

// Test suite for API testing
describe('API testing suite', () => {

    // Test case for sending a POST request to add a book
    it('First API test', function() {

        // Send a POST request to the specified API endpoint with the request body
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java", // Name of the book
            "isbn": "bcggsss", // Unique identifier for the book
            "aisle": "22s7", // Aisle number for the book
            "author": "John foe" // Author of the book
        }).then(function(response) {
            // Assert that the response body contains the expected message
            expect(response.body).to.have.property("Msg", "successfully added")

            // Assert that the response status code is 200 (OK)
            expect(response.status).to.eq(200)
        })
    })
})