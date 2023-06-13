

describe('Cypress Fixture Kullanimi ', () => {

    beforeEach(() => {
        // bunu commands.js icerisinde de yazabilirsin
        cy.visit('https://automationexercise.com/') 
    });
    it('Cypress fixture Data Kullanim Ornek Invalid username  Valid Username', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data)=>{
        cy.login(data.invalidUsername,data.validPassword)
        })

 
    });

    it('Cypress fixture Data Kullanim Ornek Invalid username  Valid Username', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data)=>{
        cy.login(data.validUsername,data.invalidPassword)
       })

    });  
});


// Fixture Kullanimi 


//Burada locaterlerimiz var 
// cypress => pageObjectModel(klasör) => customCommandsLogin.js  



// Buraya customcommandslogin.js icerisine olusturdugumu const import ediyoruz
// support=>commands.js 