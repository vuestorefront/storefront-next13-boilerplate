import { CartPageObject } from '../../support/pageObjects/CartPageObject';

const cart = new CartPageObject();

describe('Smoke: Cart Page', () => {
  it('[smoke] Add items to cart and display it', () => {
    // ACT - open homepage
    cy.visit('/');
    // ACT - open cart
    cart.openCart();
    // ASSERT - check cart elements display
    cart.checkCart();
  });
});
