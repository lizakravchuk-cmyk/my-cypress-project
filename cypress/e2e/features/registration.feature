@registration @ui
Feature: User Registration

  Background:
    Given user navigates to registration page

  @positive @smoke
  Scenario: User registers successfully with valid information
    When user fills registration form with valid data
    And user submits registration
    Then user should see success message
    And user should be logged in automatically

  @positive @regression
  Scenario: Registered user can login after registration
    When user fills registration form with valid data
    And user submits registration
    And user sees success message
    And user logs out
    And user opens login page
    When user enters login credentials for new user
    Then user should be redirected to dashboard

  @negative @regression
  Scenario: User cannot register with existing email
    When user fills registration form with existing email
    And user submits registration
    Then user should see error message "Email already exists"

  @negative @regression
  Scenario: User cannot register with weak password
    When user fills registration form with weak password
    And user submits registration
    Then user should see error message "Password must be at least 8 characters"

  @negative
  Scenario: Required fields validation
    When user submits registration without filling required fields
    Then user should see validation errors for all required fields