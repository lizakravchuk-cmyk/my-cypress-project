import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// Given Steps
Given("user opens the home page", () => {
  cy.visit("/");
});

Given("user is logged in", () => {
  cy.visit("/auth/login");
  cy.get('[data-test="email"]').type("test@practicesoftwaretesting.com");
  cy.get('[data-test="password"]').type("SuperSecretPassword!");
  cy.get('[data-test="login-submit"]').click();
  cy.url().should("include", "/dashboard");
});

// When Steps
When("user searches for {string}", (searchTerm) => {
  cy.get('[data-test="search-query"]').type(searchTerm);
  cy.get('[data-test="search-submit"]').click();
});

When("user navigates to first product", () => {
  cy.get('[data-test="product-name"]').first().click();
});

When("user navigates to different product", () => {
  cy.get('[data-test="product-name"]').eq(1).click();
});

When("user adds product to cart with quantity {int}", (quantity) => {
  cy.get('[data-test="quantity"]').clear().type(quantity);
  cy.get('[data-test="add-to-cart"]').click();
});

When("user adds first product to cart with quantity {int}", (quantity) => {
  cy.get('[data-test="product-name"]').first().click();
  cy.get('[data-test="quantity"]').clear().type(quantity);
  cy.get('[data-test="add-to-cart"]').click();
});

When("user sets quantity to {int}", (quantity) => {
  cy.get('[data-test="quantity"]').clear().type(quantity);
});

When("user tries to set quantity to {string}", (quantity) => {
  cy.get('[data-test="quantity"]').clear().type(quantity);
});

// Then Steps
Then("user should see search results", () => {
  cy.get('[data-test="search-results"]').should("be.visible");
});

Then("search results should contain {string} in product names", (searchTerm) => {
  cy.get('[data-test="product-name"]').each(($el) => {
    cy.wrap($el).should("contain.text", searchTerm);
  });
});

Then("user should see product details", () => {
  cy.url().should("include", "/product/");
  cy.get('[data-test="product-title"]').should("be.visible");
});

Then("user should see add to cart button", () => {
  cy.get('[data-test="add-to-cart"]').should("be.visible");
});

Then("user should see confirmation message", () => {
  cy.contains("added to cart").should("be.visible");
});

Then("cart quantity should be updated", () => {
  cy.get('[data-test="cart-quantity"]').should("contain", "1");
});

Then("cart should show {int} items of product", (itemCount) => {
  cy.get('[data-test="cart-quantity"]').should("contain", itemCount);
});

Then("cart should contain {int} different products", (productCount) => {
  cy.get('[data-test="cart-item"]').should("have.length", productCount);
});

Then("user should see error {string}", (errorMessage) => {
  cy.contains(errorMessage).should("be.visible");
});