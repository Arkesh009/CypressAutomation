/// <refrence types="Cypress" />

describe("My 8th test suite", () => {
    it('Handling Child window operations', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.visit(url)

            cy.origin(url, () => {
                cy.get("div.sub-menu-bar a[href*='about']").click()
            })
        })
    })
})