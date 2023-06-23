describe('Cypress Env Veriables', () => {
    it('Ortam Degiskenleri Kullanim Ornegi', () => {
        cy.visit(Cypress.env('amazon'))
    });
});