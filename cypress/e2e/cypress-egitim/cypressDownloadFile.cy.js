describe('Cypress Download File', () => {

    before(() => {          //uncaught:exception hatasini gidermek icin kod blogu
        cy.deleteDownloadsFolder() 
    });


    it('Download File', () => {
        cy.on('uncaught:exception',(err,runnable)=>{return false})
        cy.visit('https://demoqa.com/upload-download')
        cy.get('#downloadButton').click() // 1.Yöntem
        cy.get('a.btn-primary').click() // 2.Yöntem
    });
});