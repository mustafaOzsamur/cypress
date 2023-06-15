const { faker } = require ('@faker-js/faker') 

let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName=faker.name.firstName()


describe('Fakerjs ile Ornek Test', () => {
    it('fakerjs ile ornek test-1', () => {
        cy.visit('https://automationexercise.com/login')

        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()

    });




    it('fakerjs ile ornek test-2', () => {
        cy.visit('https://automationexercise.com/login')

        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("[data-qa='login-button']").click()

        cy.get("input[data-qa='login-email']").invoke('prop',"validationMessage")
        .should('include',`Please include an '@' in the email address. '${fakeName}' is missing an '@'.`) 

    });
});