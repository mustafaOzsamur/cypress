describe('Cypress Studio Kullanimi', () => {
    it('ornek Kullanim', () => {
        cy.visit('https://www.shopist.io')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.chairs > .menu-item-large-container > .menu-item-large').click();
        cy.get(':nth-child(2) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
        cy.get('.cart > .menu-item-large-container > .menu-item-large').click();
        cy.get('.checkout').click();
        cy.get('.continue-shopping').click();
        /* ==== End Cypress Studio ==== */
    });
    /* ==== Test Created with Cypress Studio ==== */
    it('Google Ziyaret', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb > .QS5gu').click();
        /* ==== End Cypress Studio ==== */
    });
});
// Test Runner de Add Commands to Test dedigimizde 
//Test runnerde web sitesü üzerinde yaptigimiz bütün isleri 
// buraya otomatik olarak yapacaktir. 

// Yeni bir it blogu olusturmak istersek 
//test Runner de Cypress Studio Kullanimi yanindaki Add new Test e tiklamamiz gerekir


