/// <reference types="cypress" />

// Test suite for handling web tables
describe('My 6th test suite', () => {
    it('Handling Web Tables', () => {
        // Visit the practice page containing the web table
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Iterate through all cells in the second column of the table
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            // Extract the text content of the current cell
            const text = $e1.text()

            // Check if the cell text contains "Python"
            if (text.includes("Python")) {
                // Access the adjacent cell (next column) in the same row
                cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
                    // Extract the text content of the adjacent cell (price)
                    const priceText = price.text()

                    // Assert that the price is equal to '25'
                    expect(priceText).to.equal('25');
                })
            }
        })
    })
})