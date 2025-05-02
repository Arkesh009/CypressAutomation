beforeEach(function () {
    // Load test data from the fixture file and initialize the HomePage object
    cy.fixture('example').then(function (data) {
        this.data = data // Store the fixture data in `this.data`
    })
})