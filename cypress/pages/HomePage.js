class HomePage {
  elements = {
    searchInput: () => cy.get('[data-test="search-query"]'),
    searchButton: () => cy.get('[data-test="search-submit"]'),
    productItems: () => cy.get('[data-test="product-name"]'),
    languageIcon: () => cy.get('[data-test="language-switcher"], .globe-icon, [aria-label*="language" i]'),
  };

  visit() {
    cy.visit('/');
    return this;
  }

  searchFor(term) {
    this.elements.searchInput().type(term);
    this.elements.searchButton().click();
    return this;
  }

 openLanguageMenu() {
  cy.get('[data-test="language-select"]').click();
  return this;
}
}

export default new HomePage();