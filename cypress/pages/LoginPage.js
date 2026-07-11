class LoginPage {
  elements = {
    email: () => cy.get('[data-test="email"]'),
    password: () => cy.get('[data-test="password"]'),
    submitButton: () => cy.get('[data-test="login-submit"]'),
  };

  visit() {
    cy.visit('/auth/login');
    return this;
  }

  login(email, password) {
    this.elements.email().type(email);
    this.elements.password().type(password);
    this.elements.submitButton().click();
    return this;
  }
}

export default new LoginPage();