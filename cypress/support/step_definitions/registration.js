import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

const testUser = {
  firstName: "John",
  lastName: "Doe",
  dob: "01/15/1990",
  country: "US",
  postcode: "12345",
  houseNumber: "123",
  street: "Main Street",
  city: "New York",
  state: "NY",
  phone: "5551234567",
  email: "john.doe@test.com",
  password: "SecurePassword123!"
};

// Given Steps
Given("user navigates to registration page", () => {
  cy.visit("/auth/register");
});

// When Steps
When("user fills registration form with valid data", () => {
  cy.get('[data-test="first-name"]').type(testUser.firstName);
  cy.get('[data-test="last-name"]').type(testUser.lastName);
  cy.get('[data-test="dob"]').type(testUser.dob);
  cy.get('[data-test="country"]').select(testUser.country);
  cy.get('[data-test="postal_code"]').type(testUser.postcode);
  cy.get('[data-test="house_number"]').type(testUser.houseNumber);
  cy.get('[data-test="street"]').type(testUser.street);
  cy.get('[data-test="city"]').type(testUser.city);
  cy.get('[data-test="state"]').type(testUser.state);
  cy.get('[data-test="phone"]').type(testUser.phone);
  cy.get('[data-test="email"]').type(testUser.email);
  cy.get('[data-test="password"]').type(testUser.password);
});

When("user fills registration form with existing email", () => {
  cy.get('[data-test="first-name"]').type("Jane");
  cy.get('[data-test="last-name"]').type("Smith");
  cy.get('[data-test="dob"]').type("05/20/1988");
  cy.get('[data-test="country"]').select("US");
  cy.get('[data-test="postal_code"]').type("54321");
  cy.get('[data-test="house_number"]').type("456");
  cy.get('[data-test="street"]').type("Oak Street");
  cy.get('[data-test="city"]').type("Los Angeles");
  cy.get('[data-test="state"]').type("CA");
  cy.get('[data-test="phone"]').type("5559876543");
  cy.get('[data-test="email"]').type("existing@test.com");
  cy.get('[data-test="password"]').type("SecurePassword123!");
});

When("user fills registration form with weak password", () => {
  cy.get('[data-test="first-name"]').type("Mark");
  cy.get('[data-test="last-name"]').type("Johnson");
  cy.get('[data-test="dob"]').type("12/10/1992");
  cy.get('[data-test="country"]').select("US");
  cy.get('[data-test="postal_code"]').type("98765");
  cy.get('[data-test="house_number"]').type("789");
  cy.get('[data-test="street"]').type("Pine Street");
  cy.get('[data-test="city"]').type("Seattle");
  cy.get('[data-test="state"]').type("WA");
  cy.get('[data-test="phone"]').type("5555551234");
  cy.get('[data-test="email"]').type("mark.johnson@test.com");
  cy.get('[data-test="password"]').type("weak");
});

When("user submits registration", () => {
  cy.get('[data-test="register-submit"]').click();
});

When("user submits registration without filling required fields", () => {
  cy.get('[data-test="register-submit"]').click();
});

When("user sees success message", () => {
  cy.contains("Registration successful").should("be.visible");
});

When("user logs out", () => {
  cy.get('[data-test="logout-button"]').click();
});

When("user enters login credentials for new user", () => {
  cy.get('[data-test="email"]').type(testUser.email);
  cy.get('[data-test="password"]').type(testUser.password);
  cy.get('[data-test="login-submit"]').click();
});

// Then Steps
Then("user should see success message", () => {
  cy.contains("Registration successful").should("be.visible");
});

Then("user should be logged in automatically", () => {
  cy.url().should("include", "/dashboard");
});

Then("user should see validation errors for all required fields", () => {
  cy.contains("is required").should("be.visible");
});