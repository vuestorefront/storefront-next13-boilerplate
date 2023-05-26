export class HomePageObject {

    get header() {
        return cy.getByTestId('header');
    }

    assertHeader(): void {
        this.header.should('be.visible');
    }
}
