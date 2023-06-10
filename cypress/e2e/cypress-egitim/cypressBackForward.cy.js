describe('Back Forward Kullanimi', () => {
    it('cypress io sayfasina gidip tarayicida ileri geri komutlarini ogrenecegiz', () => {
        cy.visit('https://www.cypress.io')

        cy.get('nav > div > ul > li:nth-child(5) > a').click()

        // tikladigini dogrulamak icin
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

        // geri dedigimiz icin Anasayfaya donecek.
        cy.go('back')    // cy.go(-1) back icin Alternative 

        // Anasayfaya dondugunu dogrulayalim
        cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')

        // tekrar pricing sayfasina doner
        cy.go('forward')  //  cy.go(1) forward icin alternative 

        // tekrar pricing sayfasina gittigini dogrulamak icin
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')


    });
});