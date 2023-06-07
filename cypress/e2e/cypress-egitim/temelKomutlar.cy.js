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
        cy.title().should('eq','cypress.io') // title tam esitlik olursa dogrular 
        cy.title().should('include','cypress') // title icerinde cypress geciyorsa dogrular
        cy.title().should('contain','cypress') // title icerinde cypress geciyorsa dogrular
    });



    it('Temel Komutlar cy.url ve cy.location Kullanimi', () => {
       cy.url().should('eq','https://example.cypress.io/commands') // url tam esitlik olursa dogrular 
       cy.url().should('include','commands')  // url icerisinde commands geciyorsa dogrular
       cy.url().should('contain','commands')  // url icerisinde commands geciyorsa dogrular


       cy.location('pathname').should('eg','/commands') // gidilen path'i dogrulamis oluyoruz
       cy.location('protocol').should('eq',"https") // gidilen protocol' dogrular
       cy.location('hostname').should('eq',"https://example.cypress.io/") // tam esitlikte dogrular
       cy.location('hostname').should('include',"cypress.io") // cypress.io icerirse hostname dogrular

    });



    it('Temel Komutlar cy.get', () => {
        cy.get("#button") // id si button olan locate
        cy.get('#button').as('deneme') // cy.get('@deneme') // button id sine as ile isim atayarak 
                                                            //baska yerlerde kullanilebilir

        cy.get('a[href="example.cypress.io"]')
        cy.get('.dropdown-menu-list') // attribute'si class lar icin '.' konur
        cy.get('div.button')
        cy.get('ul li:first')


        
    });
});