/// <reference types="cypress" />
const neatCSV = require('neat-csv'); // Importing the neat-csv library to parse CSV files
let productName; // Variable to store the product name for later validation

describe('Session test suite', () => {
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
        cy.get(".order-summary button").eq(1).click() // This triggers the download of the invoice CSV file
        
        // Reading the downloaded CSV file to validate the product name
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_arkeshbhargava.csv").then(async(text) =>{
            const csv = await neatCSV(text); // Parsing the CSV content using neat-csv
            console.log(csv); // Logging the parsed CSV data for debugging purposes
            const actualProductCSV = csv[0]["Product Name"]; // Extracting the product name from the CSV file
            // Validating that the product name in the CSV matches the one captured earlier
            expect(productName).to.equal(actualProductCSV);
        })
    })
})