import { HomePageObject } from '../../support/pageObjects/HomePageObject';

const homePage = new HomePageObject();

beforeEach(() => {
  cy.visit('/');
});

describe('Smoke: Homepage', () => {
  describe('Homepage smoke test', () => {
    it('[smoke] Check if Primary Button is working', () => {
      // ASSERT - check if primary button is working
      homePage.checkPrimaryButton();
    });
    it('[smoke] Check if Secondary Button is working', () => {
      // ASSERT - check if secondary button is working
      homePage.checkSecondaryButton();
    });
    it('[smoke] Check if elements display properly', () => {
      // ASSERT - check if home page elements display properly
      homePage.checkCategoryCard();
      homePage.checkBanners();
      homePage.checkProductCard();
    });
    it('[smoke] Check if Categories button is working ', () => {
      // ASSERT - check navigation of Category button 
      homePage.checkHeaderCategory();
    });
  });
});
