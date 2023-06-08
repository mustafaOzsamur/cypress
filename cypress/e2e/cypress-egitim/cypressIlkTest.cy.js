describe('Cypress ile ilkt Test', () => {
    it('ilk Test', () => {
        cy.visit('https://automationexercise.com/')  // BaseUrl tanimlanmamistir
        cy.title().should('eq','Automation Exercise')
        cy.url().should('eq','https://automationexercise.com/')
    });



    it('ikinci Test', () => {
        cy.visit('https://automationexercise.com/')  // BaseUrl tanimlanmamistir
        cy.title().should('include','Automation')
        cy.url().should('eq','automationexercise.com')  // test bu satirdan itibaren hata verecek ve calismayacak
    });
});