import { HomePageObject } from "~/__tests__/support/pageObjects/HomePageObject";

const homePage = new HomePageObject();

describe('Smoke: Boilerplate', () => {
    describe('Homepage smoke test', () => {
        it('[smoke] Check if Primary Button is working', () => {
          homePage.checkPrimaryButton();
        });
        it('[smoke] Check if Secondary Button is working', () => {
            homePage.checkSecondaryButton();
        });
        it('[smoke] Check if elements display properly', () => {
            homePage.checkCategoryCard();
            homePage.checkBanners();
            homePage.checkProductCard();
        });
        it('[smoke] Check if Categories button is working ', () => {
            homePage.checkHeaderCategory();
      
        });
    });
});