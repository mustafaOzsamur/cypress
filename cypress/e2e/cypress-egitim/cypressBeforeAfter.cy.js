describe('Before After Kullanimi', () => {
    before(() => {             // Bütün it blogunda once bir defa calisir
        cy.log('Before Kullanimi-Cypress Test');
        cy.visit('https://automationexercise.com/')
    });

    after(() => {               // Butun it blogundan sonra bir defa calisir
        cy.log('After kullanimi icin bir ornek')
    });

    it('', () => {
        cy.title().should('eq','Automation Exercise')
       
    });
});