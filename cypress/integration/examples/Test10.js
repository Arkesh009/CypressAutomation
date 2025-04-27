/// <reference types="cypress" />

describe('My 10th test suite', () => {
    it('Calender test', () => {
        const montNumber = "6"
        const date = "15"
        const year = "2027"

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button', year).click()

    })
})