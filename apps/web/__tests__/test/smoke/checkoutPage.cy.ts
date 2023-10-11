import { CartPageObject } from '../../support/pageObjects/CartPageObject';
import { CheckoutPageObject } from '../../support/pageObjects/CheckoutPageObject';

const checkout = new CheckoutPageObject();
const cart = new CartPageObject();

describe('Smoke: Checkout Page', () => {
  it('[smoke] Display checkout and place order', () => {
    // ACT - open homepage
    cy.visit('/');
    // ACT - open cart page
    cart.openCart();
    // ACT - go to checkout page
    checkout.goToCheckout();
    // ACT - open Contact Information form
    checkout.addContactInformation();
    // ACT - fill Contact Information form
    checkout.fillContactInformationForm();
    // ACT - open Billing Address form
    checkout.addBillingAddress();
    // ACT - fill Billing Address form
    checkout.fillBillingAddressForm();
    // ACT - open Shipping Address form
    checkout.addShippingAddress();
    // ACT - fill Shipping Address form
    checkout.fillShippingAddressForm();
    // ACT - place order by clicking button
    checkout.placeOrderButton();
    // ASSERT - check Success Page elements display
    checkout.displaySuccessPage();
  });
});
