import { Product } from '../types/types';

export class CartObject {
  get cartPreview() {
    return cy.getByTestId('checkout-layout');
  }

  get totalItemsAmount() {
    return cy.getByTestId('totalInCart');
  }

  get subtotalPrice() {
    return cy.getByTestId('specialPrice');
  }

  get totalPrice() {
    return cy.getByTestId('total');
  }

  get promoCodeInput() {
    return cy.getByTestId('input-field');
  }

  get quanityDecreaseButton() {
    return cy.getByTestId('quantitySelectorDecreaseButton');
  }

  get productCards() {
    return cy.getByTestId('product-card');
  }

  get quantitySelectorInput() {
    return cy.getByTestId('quantitySelectorInput');
  }

  get cartBadgeIndicator() {
    return cy.getByTestId('cart-action').getByTestId('cart-badge').getByTestId('badge-indicator');
  }

  get cartItem() {
    return cy.getByTestId('link');
  }
  get cartIcon() {
    return cy.getByTestId('navbar-top').find('[data-testid="shopping-cart"]');
  }
  checkCart(): void {
    cy.getFixture('products').then((fixture) => {
      this.assertCartPreviewElements(fixture, 1);
      this.cartItem.should('have.text', fixture.name);
    });
  }

  assertCartPreviewElements(data: Product, expectedElements: number) {
    this.cartPreview.should('be.visible');
    this.totalItemsAmount.should('have.text', `(Items: ${expectedElements})`);
    this.subtotalPrice.should('have.text', `${data.currency}${data.price.toFixed(2)}`);
    this.totalPrice.should('have.text', `${data.currency}${data.price.toFixed(2)}`);
    this.promoCodeInput.should('be.visible');
  }

  openCart(): void {
    this.cartIcon.click();
  }
}
