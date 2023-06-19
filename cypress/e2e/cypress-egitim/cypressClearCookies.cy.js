describe('Cypress Clear Cookies', () => {
    it('Dosya yükleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/')


        cy.getCookies() //Cookiesleri gösterir
        cy.clearCookies() // Cookiesleri temizler
        cy.getCookies().should('have.length',0) // silindikten sontaki cookies leri gösterecek
        


        cy.get('div:nth-child(3) > div.pane-header > h3').click()
       cy.get('.logo-preview').attachFile({filePath:"Fenerbahce.png"},{subjectType:'drag-n-drop'})
                
    });



    it('Dosya yükleme -2', () => {  
        const fileName='Konyaspor.png'
        cy.fixture('Konyaspor.png')
        .then(Cypress.Blob.base64StringToBlob) // convert islemi icin
        .then((fileContent)=>{
              cy.get('.logo-preview').attachFile({fileContent,fileName,mimeType:'image/**'},{subjectType:'drag-n-drop'})
        })
                
    });
});
