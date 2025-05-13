/// <reference types="cypress"/>

describe("Upload and Download test suite", () => {

    it("verify excel upload download", () => {
        const replaceNum = 350;
        const searchFruit = "Apple"
        const FilePath = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get("#downloadButton").click()

        cy.task('writeExcelTest', {searchText: searchFruit, replaceText: "350", change: {rowChange: 0, colChange: 2}, filePath: FilePath})
        cy.get("#fileinput").selectFile(FilePath);

        cy.contains(searchFruit).parent().parent().find("#cell-4-undefined").should('have.text', replaceNum);
    })
})