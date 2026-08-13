@profile @ui
Feature: User Profile Management

  Background:
    Given user opens login page
    And user enters valid credentials
    And user is on dashboard

  @positive @regression
  Scenario: User can access profile page
    When user clicks on profile menu
    Then user should see profile page
    And user should see their account information

  @positive @smoke
  Scenario: User can view profile details
    Then user should see email "test@test.com"
    And user should see name field populated

  @positive @regression
  Scenario: User can update profile information
    When user clicks on profile menu
    And user updates first name to "John"
    And user updates last name to "Doe"
    And user saves changes
    Then user should see success message "Profile updated successfully"

  @positive @regression
  Scenario: User can change password
    When user navigates to security settings
    And user enters current password
    And user enters new password "NewPassword123"
    And user confirms new password
    And user saves changes
    Then user should see success message "Password changed successfully"

  @negative @regression
  Scenario: User cannot change password with incorrect current password
    When user navigates to security settings
    And user enters wrong current password
    And user enters new password "NewPassword123"
    And user saves changes
    Then user should see error message "Current password is incorrect"

  @positive
  Scenario: User can logout from profile
    When user clicks logout button
    Then user should be redirected to login page
    And user should not be logged in