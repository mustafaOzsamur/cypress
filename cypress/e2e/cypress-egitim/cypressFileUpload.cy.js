describe('Cypress File Upload', () => {
    it('Dosya yükleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath:"Fenerbahce.png"},{subjectType:'drag-n-drop'})
                
    });



    it('Dosya yükleme -2', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
       
        const fileName='Fenerbahce.png'
        cy.fixture('Fenerbahce.png')
        .then(Cypress.Blob.base64StringToBlob) // convert islemi icin
        .then((fileContent)=>{
              cy.get('.logo-preview').attachFile({fileContent,fileName,mimeType:'image/**'},{subjectType:'drag-n-drop'})
        })
                
    });
});
