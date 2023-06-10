

describe('Before After Kullanimi', () => {
    beforeEach(() => {             // Her it blogunda once bir defa calisir
        cy.log('BeforeEach Kullanimi-Cypress Test');
        cy.visit('https://automationexercise.com/')
    });

    afterEach(() => {               // Her it blogundan sonra bir defa calisir
        cy.log('AfterEach kullanimi icin bir ornek')
    });

    it('Title dogrula', () => {
        cy.title().should('eq','Automation Exercise')  
    });

    it('Url dogrula', () => {
        cy.url().should('eq','https://automationexercise.com/')
    });

    it('hostname dogrula', () => {
        cy.location('hostname').should('include',"automation")
    });


});