describe('Cypress Locator', () => {
    it('html Element locate etme', () => {
        cy.get('#user-name') // id locate
        cy.get('.login-box') // class locate
        cy.get('input') // tag locate etme
        cy.get('input[name="user-name"]') // attribute locate
        cy.get('input[placeholder]:contains("Username")') // Text iceren element locate

        // asagidaki locate cesiti aynidir
        cy.get('a:contains("Login)') // Text iceren element locate 
        cy.get('a').contains("Login") // Text iceren element locate 
        cy.contains('Login') // Text iceren element locate 

    });
});