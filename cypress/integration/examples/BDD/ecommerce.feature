Feature: End to end Ecommerce validation

    # This scenario is tagged as @regression for regression testing
    @regression
    Scenario: Ecommerce products delivery
        Given I am on Ecommerce page
        When I login to the application
        And I add items to Cart and checkout
        And Validate the total price limit
        Then select the Country submit and verify thankyou

    # This scenario outline is tagged as @smoke for smoke testing
    @smoke
    Scenario Outline: Ecommerce products delivery
        Given I am on Ecommerce page
        When I login to the application portal
            # The following table provides example credentials for the scenario outline
            | username           | password |
            | rahulshettyacademy | learning |
        And I add items to Cart and checkout
        And Validate the total price limit
        Then select the Country submit and verify thankyou