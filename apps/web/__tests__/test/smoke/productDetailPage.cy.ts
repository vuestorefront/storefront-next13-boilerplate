import { ProductDetailPageObject } from  "../../support/pageObjects/ProductDetailPageObject";

const productDetailPage = new ProductDetailPageObject();

describe('Cart smoke test', () => {
    it('[smoke] Add items to cart and display it', () => {
        productDetailPage.displayCheck();

    });
});