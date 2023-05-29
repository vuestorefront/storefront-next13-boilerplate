
const productsAmount = 24;

export class ProductListPageObject {

  categoryGridPath = 'category-grid';
  productPricePath = '[data-testid="product-card-vertical-price"]';
  productCardPath = 'product-card';
  categoriesPath = 'categories';
  categoryHeaderPath = 'category-layout';
  productTitlePath = 'link';
  productImagePath = 'image-slot';
  productAddToCartPath = 'button';
  categoryListSingleItemPath = 'list-item-menu-label';
  

  get categoryGrid() {
    return cy.getByTestId(this.categoryGridPath);
  }

   get productPrice() {
    // I'm using `cy.get` instead of `cy.getByTestId` because it's impossible to setup data-testid for legacy SAP
    return cy.get(this.productPricePath);
  }

  get products() {
    return cy.getByTestId(this.productCardPath);
  }

  get categories() {
    return cy.getByTestId(this.categoriesPath);
  }

  get categoryHeader() {
    return cy.getByTestId(this.categoryHeaderPath).find('h1');
  }


  
  assertProductListElements(): void {
    this.products.each((product) => {
      cy.wrap(product).as('product');
      cy.get('@product').find(`[data-testid="${this.productImagePath}"]`).should('be.visible');
      cy.get('@product').find(`[data-testid="${this.productTitlePath}"]`).should('be.visible');
      cy.get('@product').find(`${this.productPricePath}`).should('be.visible');
      cy.get('@product').find(`[data-testid="${this.productAddToCartPath}"]`).should('be.visible');
    });
  }

  assertFirstProduct(): void {
    this.products.first().then((product) => {
      let name;
      let price;
      cy.wrap(product).as('product');

      cy.get('@product').find(`[data-testid="${this.productTitlePath}"]`).then((productLink) => {
        name = productLink.text().trim().replace(/\\n/g, ' ');
      }).then(() => {
        cy.get('@product').find(`${this.productPricePath}`).then((productPrice) => {
          price = productPrice.text().trim().replace(/\\n/g, ' ');
        }).then(() => {
          cy.get('@product').click();
        });
      });
    });
  }

  assertGridView(): void {
    this.categoryGrid.should('be.visible');
    this.categoryGrid.find(`[data-testid="${this.productCardPath}"]`).should('have.length', productsAmount);
  }
  openFirstCategory(): void {
    this.categories.first().then((firstCategory) => {
      cy.wrap(firstCategory).as('category');
      cy.get('@category').find(`[data-testid="${this.categoryListSingleItemPath}"]`).first().then((el) => {
        cy.wrap(el).click();
        this.categoryHeader.should('have.text','All products');
      });
    });

  }
}