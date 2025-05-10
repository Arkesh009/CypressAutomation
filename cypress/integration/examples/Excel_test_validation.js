/// <reference types="cypress" />
//const neatCSV = require('neat-csv'); // Importing the neat-csv library to parse CSV files

let productName; // Variable to store the product name for later validation

describe('JWT Session test suite', () => {
    it('is logged in through local storage', async () => {
        // Custom command to log in via API and set the token in local storage
        cy.LoginAPI().then(function(){
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad : function(window){
                    // Setting the token in local storage before the page loads
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        // Capturing the product name from the second card on the page
        cy.get(".card-body b").eq(1).then(function(ele){
            productName = ele.text(); // Storing the product name for later validation
        })

        // Adding the second product to the cart
        cy.get(".card-body button:last-of-type").eq(1).click()

        // Navigating to the cart page
        cy.get("[routerlink*='cart']").click()
        cy.wait(2000) // Adding a wait to ensure the cart page loads completely

        // Proceeding to the checkout page
        cy.contains("Checkout").click()

        // Typing "ind" in the country selection field to filter results
        cy.get("[placeholder*='Select Country']").type("ind")

        // Iterating through the dropdown results to select "India"
        cy.get(".ta-results button").each(($el, index, $list) => {
            if($el.text() === " India"){ // Matching the text to " India"
                cy.wrap($el).click() // Clicking on the matching element
            }
        })

        // Submitting the order
        cy.get(".action__submit").click()

        // Clicking on the "Download Invoice" button
        cy.get(".order-summary button").contains("Excel").click() // Triggering the download of the invoice in Excel format
        
        const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_arkeshbhargava.xlsx" // Path to the downloaded Excel file

        // Using a custom Cypress task to convert the Excel file to JSON
        cy.task('excelToJsonConverter', filePath).then((result) => {
            cy.log(result.data[1].A) // Logging the value from column A of the second row for debugging
            expect(productName).to.equal(result.data[1].B) // Validating that the product name matches the value in column B of the second row
        })

        // Reading the downloaded file directly to ensure it contains the product name
        cy.readFile(filePath).then(function(text){
            expect(text).to.include(productName); // Validating that the file content includes the product name
        })
        
    })
})