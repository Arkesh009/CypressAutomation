/// <reference types="cypress" />

// Test suite for testing calendar functionality
describe('My 10th test suite', () => {
    it('Calendar test', () => {
        // Define the target month, date, and year
        const monthNumber = "6" // June (0-based index, so subtract 1 when using)
        const date = "15" // Target date
        const year = "2027" // Target year
        const expectedList = [monthNumber, date, year] // Expected values for assertion

        // Visit the webpage containing the calendar
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        // Open the calendar widget
        cy.get('.react-date-picker__inputGroup').click()

        // Navigate to the year selection view
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()

        // Select the target year
        cy.contains('button', year).click()

        // Select the target month
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber) - 1).click()

        // Select the target date
        cy.contains('abbr', date).click()

        // Assertion: Verify that the selected date matches the expected values
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            // Extract the value of each input field and compare it with the expected value
            cy.wrap($el).invoke('val').should('eq', expectedList[index])
        })
    })
})