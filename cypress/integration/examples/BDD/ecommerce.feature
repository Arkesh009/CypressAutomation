Feature: End to end Ecommerce validation

@regression
Scenario: Ecommerce products delivery
Given I am on Ecommerce page
When I login to the application
And I add items to Cart and checkout
And Validate the total price limit
Then select the Country submit and verify thankyou

@smoke
Scenario Outline: Ecommerce products delivery
Given I am on Ecommerce page
When I login to the application portal
| username           | password |
| rahulshettyacademy | learning |
And I add items to Cart and checkout
And Validate the total price limit
Then select the Country submit and verify thankyou