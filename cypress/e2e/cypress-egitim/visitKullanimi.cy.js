describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit Kullanimi', () => {
        cy.visit('/') // cypress.config.js'de atamis oldugumu Url'e gider

        cy.visit('/commands') // BaseUrl tanimlandiysa sadece path

        cy.visit('www.google.com') //BaseUrl tanimlanmadiysa

        cy.visit({
            url:'www.wisequarter.com', //BaseUrl tanimlanmadiysa
            method: 'GET'   
        })
    });

    it('Temel Komutlar cy.title Kullanimi', () => {
        cy.title().should('eq','cypress.io')
    });
});