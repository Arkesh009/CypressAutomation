import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
const homePage = new HomePage()

Given('I am on Ecommerce page', ()=>{
    homePage.goTo(Cypress.env('url')+"/loginpagePractise/")
})

When('I login to the application', function(){
    this.productPage = homePage.login(this.data.username, this.data.password)
    this.productPage.pageValidation()
    this.productPage.verifyCardLimit().should('have.length', 4)
})

When('I add items to Cart and checkout', function(){
    this.productPage.selectProduct(this.data.productName)
    this.productPage.selectFirstProduct()
    this.cartPage = this.productPage.goToCart()
})

When('Validate the total price limit', function(){
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000)
    })
})

Then('select the Country submit and verify thankyou', function(){
    const ConfirmationPage = this.cartPage.checkOutItems()
    ConfirmationPage.submitFormDetails()
    ConfirmationPage.getAlertMessage().should('contain', 'Success')
})