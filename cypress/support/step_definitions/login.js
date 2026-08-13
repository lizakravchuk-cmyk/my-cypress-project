import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// Page Objects (inline for simplicity)
const getLoginPage = () => {
  return {
    emailInput: () => cy.get('[data-test="email"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    submitButton: () => cy.get('[data-test="login-submit"]'),
  };
};

// Given Steps
Given("user opens login page", () => {
  cy.visit("/auth/login");
});

// When Steps
When("user enters valid credentials", () => {
  cy.get('[data-test="email"]').type("test@practicesoftwaretesting.com");
  cy.get('[data-test="password"]').type("SuperSecretPassword!");
  cy.get('[data-test="login-submit"]').click();
});

When("user enters email {string} and password {string}", (email, password) => {
  cy.get('[data-test="email"]').type(email);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-submit"]').click();
});

When("user clicks login without credentials", () => {
  cy.get('[data-test="login-submit"]').click();
});

When("user clicks on profile menu", () => {
  cy.get('[data-test="profile-menu"]').click();
});

// Then Steps
Then("user should be redirected to dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Then("user should see welcome message", () => {
  cy.contains("Welcome").should("be.visible");
});

Then("user should see profile page", () => {
  cy.url().should("include", "/profile");
  cy.contains("Profile").should("be.visible");
});

Then("user should see error message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("user should remain on login page", () => {
  cy.url().should("include", "/auth/login");
});
