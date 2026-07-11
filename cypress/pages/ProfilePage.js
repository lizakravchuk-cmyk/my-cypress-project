class ProfilePage {
  elements = {
    phone: () => cy.get('[data-test="phone"]'),
    street: () => cy.get('[data-test="street"]'),
    updateButton: () => cy.get('[data-test="update-profile-submit"]'),
    successMessage: () => cy.get('.alert-success'),
  };

  visit() {
    cy.visit('/account/profile');
    return this;
  }

  updatePhoneAndAddress(phone, street) {
    this.elements.phone().clear().type(phone);
    this.elements.street().clear().type(street);
    this.elements.updateButton().click();
    return this;
  }
}

export default new ProfilePage();