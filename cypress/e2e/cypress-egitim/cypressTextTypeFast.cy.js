describe('Hizli Text Yazimi', () => {
    it('Hizli Text Yazimi Testi', () => {
        cy.visit('https://automationexercise.com/contact_us')
        cy.get('#message')
        .type('If you have any suggestion areas or improvements, do let us know.')


    


    });


    it('Hizli Text Yazimi Testi -2', () => {
        cy.visit('https://automationexercise.com/contact_us')
        cy.get('#message')
        .type('If you have any suggestion areas or improvements, do let us know.',{delay:0})

    });

    });