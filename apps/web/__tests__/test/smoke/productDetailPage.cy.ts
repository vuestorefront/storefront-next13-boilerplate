import { ProductDetailPageObject } from '../../support/pageObjects/ProductDetailPageObject';

const productDetailPage = new ProductDetailPageObject();

describe('Smoke: Product Detail Page', () => {
  it('[smoke] Open product page and check displayed data', () => {
    // ASSERT - check product page elements display
    productDetailPage.displayCheck();
  });
});
