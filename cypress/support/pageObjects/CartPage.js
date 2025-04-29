import ConfirmationPage from "./ConfirmationPage"

class CartPage{

    checkOutItems(){
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage();
    }

    sumOfProducts(){
        let sum = 0

        // Iterate through all product prices in the cart and calculate the total sum
        return cy.get('tr td:nth-child(4) strong').each($el => {
            const amount = Number($el.text().split(" ")[1].trim()) // Extract and convert the price to a number
            sum += amount // Add the price to the total sum
            expect(sum).to.be.lessThan(200000) // Assert that the running total is less than 200000
        }).then(() => {
            return sum;
            
        })
    }
}

export default CartPage;