@products @ui
Feature: Product Management and Shopping

  Background:
    Given user opens the home page
    And user is logged in

  @positive @smoke
  Scenario: User can search for products
    When user searches for "laptop"
    Then user should see search results
    And search results should contain "laptop" in product names

  @positive @regression
  Scenario: User can view product details
    When user navigates to first product
    Then user should see product details
    And user should see add to cart button

  @positive @smoke
  Scenario: User can add product to cart
    When user navigates to first product
    And user adds product to cart with quantity 1
    Then user should see confirmation message
    And cart quantity should be updated

  @positive @regression
  Scenario: User can update quantity before adding to cart
    When user navigates to first product
    And user sets quantity to 5
    And user adds product to cart
    Then cart should show 5 items of product

  @positive @regression
  Scenario: User can add multiple products to cart
    When user adds first product to cart with quantity 2
    And user navigates to different product
    And user adds this product to cart with quantity 1
    Then cart should contain 2 different products

  @negative
  Scenario: User cannot add invalid quantity
    When user navigates to first product
    And user tries to set quantity to "-1"
    Then user should see error "Quantity must be positive"