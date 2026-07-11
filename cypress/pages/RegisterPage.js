class RegisterPage {
  elements = {
    firstName: () => cy.get('[data-test="first-name"]'),
    lastName: () => cy.get('[data-test="last-name"]'),
    dob: () => cy.get('[data-test="dob"]'),
    country: () => cy.get('[data-test="country"]'),
    postcode: () => cy.get('[data-test="postal_code"]'),
    houseNumber: () => cy.get('[data-test="house_number"]'),
    street: () => cy.get('[data-test="street"]'),
    city: () => cy.get('[data-test="city"]'),
    state: () => cy.get('[data-test="state"]'),
    phone: () => cy.get('[data-test="phone"]'),
    email: () => cy.get('[data-test="email"]'),
    password: () => cy.get('[data-test="password"]'),
    submitButton: () => cy.get('[data-test="register-submit"]'),
  };

 visit() {
  cy.visit('/auth/register');
  cy.get('[data-test="first-name"]', { timeout: 10000 }).should('be.visible');
  return this;

  }

  fillRequiredFields(user) {
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.dob().type(user.dob);
    this.elements.country().select(user.country);
    this.elements.postcode().type(user.postcode);
    this.elements.houseNumber().type(user.houseNumber);
    this.elements.phone().type(user.phone);
    this.elements.email().type(user.email);
    this.elements.password().type(user.password);
    return this;
  }

  submit() {
    this.elements.submitButton().click();
    return this;
  }
}

export default new RegisterPage();