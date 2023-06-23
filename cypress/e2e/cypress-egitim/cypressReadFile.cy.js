describe('Cypress Read File', () => {
    it('read File', () => {

        // Dosya icerisinde yaziyi okuyup assert etmek icin
    cy.readFile('CypressWriteFileDoc/exampleFile.txt').should('contain','cypress')
    });


    it('read File-2', () => {

        // Dosya icerisinde yaziyi okuyup assert etmek icin
    cy.readFile('CypressWriteFileDoc/exampleFile.txt').then((text)=>{
        expect(text).to.contain('derslerine')
    })

    });
});