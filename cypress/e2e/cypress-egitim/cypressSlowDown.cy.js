import { slowCypressDown } from 'cypress-slow-down'

const { faker } = require ('@faker-js/faker') 

let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName=faker.name.firstName()



// icine birsey yazmazsak 1 saniye olarak alir, icine ne yazarsak her test adiminda o kadar bekler.
slowCypressDown(false)

describe('Slow Down Kullanimi', () => {
    it('slowdown ile ornek test', () => {
        
        // it bloklarinda her test adiminda 2 saniye bekler
      cy.slowDown(200) 

        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()

        // bekleme süresi burada biter diger it blogu describe nin üyerindeki bekleme süresine göre calisir
       cy.slowDownEnd() 
    });




    it('slowdown ile ornek test-2', () => {
        cy.visit('https://automationexercise.com/login')

        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()

        cy.get("input[data-qa='login-email']").invoke('prop',"validationMessage")
        .should('include',`Please include an '@' in the email address. '${fakeName}' is missing an '@'.`) 

    });
});