declare namespace Cypress {
    interface Chainable {
        getByTestId(id: string): Chainable;
    }
}

Cypress.Commands.add('getByTestId', (testid: string) =>
    cy.get(`[data-testid="${testid}"]`)
);
