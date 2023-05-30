import { CheckoutObject } from  "../../support/pageObjects/CheckoutObject";
import { CartObject } from  "../../support/pageObjects/CartObject";

const checkout = new CheckoutObject();
const cart = new CartObject();

describe('Checkout smoke test', () => {
    it('[smoke] Display checkout and place order', () => {
cy.visit("/");
cart.openCart();
checkout.goToCheckout();
checkout.addContactInformation();
checkout.fillContactInformationForm();
checkout.addBillingAddress();
checkout.fillBillingAddressForm();
checkout.addShippingAddress();
checkout.fillShippingAddressForm();
checkout.placeOrderButton();
checkout.displaySuccessPage();
 });
});