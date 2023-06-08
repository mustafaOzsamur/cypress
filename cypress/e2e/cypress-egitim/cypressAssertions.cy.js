describe('Cypress Assertions Kullanimi', () => {
    it('Assertions Kullanim Ornekleri', () => {
        cy.visit('https://www.shopist.io')
        cy.title().should('eq','Shop.ist')
        cy.url().should('contain','shop')


    // gorünürlügünü test eder
    cy.get('#main section > a > div > div:nth-child(1)').should('be.visible') 

    // görünür mü ve icerisinde Shop kelimesi geciyor mu?
    cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('contain','Shop') 

    // Shop kelimesi geciyor mu?
    cy.get('#main section > a > div > div:nth-child(1)').should('contain','Shop') 

    //have.text kullanacaksak textin tamamini almamiz gerekir.
    cy.get('#main section > a > div > div:nth-child(1)').should('have.text',"Shop the look")

    // Uzunlugu test eder -1 (Uzunluk 1 mi?)
    cy.get('#main section > a > div > div:nth-child(1)').should('have.length',1)

    //Uzunlugu test eder -2 (Uzunluk 1 mi?)
    cy.get('#main section > a > div > div:nth-child(1)').its('length').and('eq',1)

    //implicit Assertions Attribute'i href olanin value'u /department/chairs mi?
    cy.get('#main section > a').should('have.attr','href','/department/chairs')
    });
});