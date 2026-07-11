import registerPage from '../pages/RegisterPage';
import loginPage from '../pages/LoginPage';
import profilePage from '../pages/ProfilePage';
import productPage from '../pages/ProductPage';
import homePage from '../pages/HomePage';

const existingUser = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
};

describe('Feature: Practice Software Testing', () => {

  let registeredUser = {};

  it('Scenario: Successful user registration', () => {
    const uniqueEmail = `test.user.${Date.now()}@example.com`;
    const password = `Xk9!qR${Date.now()}Zt`;

    registeredUser = { email: uniqueEmail, password };

    registerPage.visit();
    registerPage.fillRequiredFields({
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990-01-01',
      country: 'AD',
      postcode: '12345',
      houseNumber: '42',
      phone: '0123456789',
      email: uniqueEmail,
      password: password,
    });
    registerPage.submit();

    cy.url().should('include', '/auth/login');
    cy.wait(2000);
  });

  it('Scenario: Successful sign in to the website', () => {
    loginPage.visit();
    loginPage.login(registeredUser.email, registeredUser.password);

    cy.url().should('include', '/account');
    cy.get('[data-test="nav-menu"], [data-test="page-title"]').should('be.visible');
  });

it('Scenario: Update user profile information', () => {
  loginPage.visit();
  loginPage.login(registeredUser.email, registeredUser.password);

  cy.url().should('include', '/account');

  cy.intercept('PUT', '**/users/**').as('updateProfile');

  profilePage.visit();
  profilePage.updatePhoneAndAddress('0987654321', '456 Updated Ave');

  cy.wait('@updateProfile').its('response.statusCode').should('eq', 200);
});


  it('Scenario: Add item to the cart', () => {
    productPage.visitFirstProduct();
    productPage.setQuantity('2');
    productPage.addToCart();

    productPage.elements.cartQuantity().should('contain', '2');
  });

  it('Scenario: Find exact product on the site', () => {
    homePage.visit();
    homePage.searchFor('Hammer');

    homePage.elements.productItems().should('have.length.greaterThan', 0);
    homePage.elements.productItems().first().should('contain.text', 'Hammer');
  });

  it('Scenario: Change website language', () => {
  homePage.visit();
  homePage.openLanguageMenu();
  cy.get('.dropdown-menu').contains('DE').click();

  cy.get('[data-test="language-select"]').should('contain.text', 'DE');
});

});