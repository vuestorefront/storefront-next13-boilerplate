import { Product } from "../types/types";

export class ProductDetailPageObject {

    get addToCartButton() {
        return cy.getByTestId('button').contains('Add to cart');
      }
    
    get productTitle() {
        return cy.getByTestId('productName');
      }
    
      get productDescription() {
        return cy.getByTestId('productDescription').eq(0);
      }
    
      get productGallery() {
        return cy.getByTestId('gallery-images');
      }
    
      get quantitySelector() {
        return cy.getByTestId('quantitySelectorInput');
      }
    
      get productPriceValue() {
        return cy.getByTestId('price');
      }
        

  displayCheck(): void {
    cy.getFixture('products').then(fixture => {
      cy.visit(fixture.url);
      this.assertProductDetailPageElements(fixture);
    });
  }

  assertProductDetailPageElements(data: Product) {
    this.productTitle
      .should('have.text', (data.name));
      this.productDescription
      .should('have.text', (data.description));
      this.productGallery.should('be.visible');
      this.productPriceValue
      .should('have.text', (data.currency + data.price.toFixed(2)));
      this.quantitySelector.should('be.visible');
      this.addToCartButton.should('be.visible');
  }
}
