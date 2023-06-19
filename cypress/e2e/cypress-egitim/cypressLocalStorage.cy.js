describe('Cypress Local Storage', () => {
    it('Local Storage -1', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(()=>{
            cy.log(localStorage.length)
            cy.log(window.localStorage.length)

            localStorage.setItem('deneme Key','deneme value')
            // Görmek icin sayfada inspect=>Application=>Storage=>Local Storage'nin bi altindakini domain'i tikla


            cy.wait(2000).then(()=>{
                localStorage.removeItem('deneme Key','deneme value') // Eklenen Storage yi siler
            })

            cy.wait(1500).then(()=>{
                localStorage.clear()  // Local Storage yi tamemen siler siler
            })
        })
                
    });


    it.only('Local Storage -2', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(()=>{
         
        cy.wait(4000)
        cy.clearLocalStorage()



        })

                
    });
});
