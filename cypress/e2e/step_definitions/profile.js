import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// Given Steps
Given("user opens login page", () => {
  cy.visit("/auth/login");
});

Given("user enters valid credentials", () => {
  cy.get('[data-test="email"]').type("test@practicesoftwaretesting.com");
  cy.get('[data-test="password"]').type("SuperSecretPassword!");
  cy.get('[data-test="login-submit"]').click();
});

Given("user is on dashboard", () => {
  cy.url().should("include", "/dashboard");
  cy.contains("Dashboard").should("be.visible");
});

// When Steps
When("user clicks on profile menu", () => {
  cy.get('[data-test="profile-menu"]').click();
});

When("user navigates to security settings", () => {
  cy.get('[data-test="settings-link"]').click();
  cy.get('[data-test="security-tab"]').click();
});

When("user updates first name to {string}", (firstName) => {
  cy.get('[data-test="first-name"]').clear().type(firstName);
});

When("user updates last name to {string}", (lastName) => {
  cy.get('[data-test="last-name"]').clear().type(lastName);
});

When("user saves changes", () => {
  cy.get('[data-test="save-button"]').click();
});

When("user enters current password", () => {
  cy.get('[data-test="current-password"]').type("SuperSecretPassword!");
});

When("user enters wrong current password", () => {
  cy.get('[data-test="current-password"]').type("WrongPassword123");
});

When("user enters new password {string}", (newPassword) => {
  cy.get('[data-test="new-password"]').type(newPassword);
});

When("user confirms new password", () => {
  // Assuming the new password field is the same as entered, we just confirm it
  cy.get('[data-test="confirm-password"]').type("NewPassword123");
});

When("user clicks logout button", () => {
  cy.get('[data-test="logout-button"]').click();
});

// Then Steps
Then("user should see profile page", () => {
  cy.url().should("include", "/profile");
  cy.contains("Profile").should("be.visible");
});

Then("user should see their account information", () => {
  cy.get('[data-test="account-info"]').should("be.visible");
});

Then("user should see email {string}", (email) => {
  cy.get('[data-test="email-display"]').should("contain", email);
});

Then("user should see name field populated", () => {
  cy.get('[data-test="first-name"]').should("have.value");
  cy.get('[data-test="last-name"]').should("have.value");
});

Then("user should see success message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("user should see error message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("user should be redirected to login page", () => {
  cy.url().should("include", "/auth/login");
});

Then("user should not be logged in", () => {
  cy.get('[data-test="profile-menu"]').should("not.exist");
});