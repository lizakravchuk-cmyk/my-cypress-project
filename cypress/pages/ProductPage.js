class ProductPage {
  elements = {
    quantityInput: () => cy.get('[data-test="quantity"]'),
    addToCartButton: () => cy.get('[data-test="add-to-cart"]'),
    cartQuantity: () => cy.get('[data-test="cart-quantity"]'),
  };

  visitFirstProduct() {
    cy.visit('/');
    cy.get('[data-test="product-name"]').first().click();
    return this;
  }

  setQuantity(qty) {
    this.elements.quantityInput().clear().type(qty);
    return this;
  }

  addToCart() {
    this.elements.addToCartButton().click();
    return this;
  }
}

export default new ProductPage();