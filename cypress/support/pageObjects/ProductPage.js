import CartPage from "./CartPage"

class ProductPage{

    pageValidation(){
        cy.contains('Shop Name').should('be.visible')
    }

    verifyCardLimit(){
        return cy.get('app-card').should('have.length', 4)
    }

    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }

    goToCart(){
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`).then($element => {
            // Ensure that exactly one product card matches the specified name
            cy.wrap($element).should('have.length', 1)

            // Click the "Add" button on the matching product card
            cy.wrap($element).contains('button', 'Add').click()
        })
    }

}

export default ProductPage;