@login @smoke @ui
Feature: User Authentication - Login

  Background:
    Given user opens login page

  @positive @critical
  Scenario: User logs in successfully with valid credentials
    When user enters valid credentials
    Then user should be redirected to dashboard
    And user should see welcome message

  @positive @smoke
  Scenario: User can access profile after login
    When user enters valid credentials
    Then user should be redirected to dashboard
    When user clicks on profile menu
    Then user should see profile page

  @negative @regression
  Scenario: User cannot login with invalid email
    When user enters email "invalid@test.com" and password "123456"
    Then user should see error message "Invalid credentials"
    And user should remain on login page

  @negative @regression
  Scenario: User cannot login with invalid password
    When user enters email "test@test.com" and password "wrongpassword"
    Then user should see error message "Invalid credentials"
    And user should remain on login page

  @negative
  Scenario: User sees error with empty credentials
    When user clicks login without credentials
    Then user should see error message "Email is required"
