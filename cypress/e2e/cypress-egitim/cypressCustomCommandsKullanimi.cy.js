
describe('Custom Commands', () => {

    beforeEach(() => {
        // bunu commands.js icerisinde de yazabilirsin
        cy.visit('https://automationexercise.com/') 
    });
    it('Custom Commands Kullanim Ornek Invalid username  Valid Username', () => {
     cy.login('denemeabc@abc.com','deneme')
 
    });

    it('Custom Commands Kullanim Ornek Invalid username  Valid Username', () => {
        cy.login('deneme@gmail.com','denemeParalo2') 
       });

    
});