/// <reference types="cypress" />

describe('Session test suite', () => {
    it('is logged in through local storage', () => {
        cy.LoginAPI().then(function(){
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })
})