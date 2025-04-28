import ProductPage from './ProductPage';
class HomePage{

    goTo(url){
        cy.visit(url)
    }

    login(username, password){
        cy.get('#username').type(username) // Input username
        cy.get('#password').type(password) // Input password
        cy.contains('Sign In').click()
        return new ProductPage();
    }
}

export default HomePage;