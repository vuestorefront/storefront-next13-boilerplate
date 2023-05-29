import { CartObject } from  "../../support/pageObjects/CartObject";

const cart = new CartObject();

describe('Cart smoke test', () => {
    it('[smoke] Add items to cart and display it', () => {
      cy.visit("/");
      cart.openCart();
      cart.checkCart();
    });
  
  });