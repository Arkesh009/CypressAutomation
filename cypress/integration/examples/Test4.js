/// <reference types="cypress" />

// Test suite for handling alerts and confirmation pop-ups
describe('My fourth test suite', function(){
    it('First test case', function(){
        // Visit the practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Trigger the alert pop-up
        cy.get('#alertbtn').click();

        // Trigger the confirmation pop-up
        cy.get('[value="Confirm"]').click();

        // Handle and verify the alert pop-up text
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        // Handle and verify the confirmation pop-up text
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
    });
});