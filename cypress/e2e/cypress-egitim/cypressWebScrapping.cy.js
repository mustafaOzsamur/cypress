describe('web Scrapping', () => {
    it('write file to txt for products', () => {
        cy.step('shopist.io Sandalyeler sayfasina gider')
        cy.visit('https://shopist.io/department/chairs')

            // Sandelye adi ve fiyatini bize getirecek locater
        cy.step('description classi icerisindeki sandalye adi ve fiyatlarin uzunlugu')
        cy.get('.description').as('chairsPrice').its('length').should('eq',9) //1. Yöntem (Tecih)
        //    cy.get('.description').as('chairsPrice').should('have.length',9) //2.Yöntem


        // her bir each'i görmek icin
        const results=[];
        cy.step('Sonuclari logluyoruz')
        cy.get('@chairsPrice').each(($el,index)=>{
            cy.log("Rasults: "+index+"- "+$el.text())

            // Yazdirmak icin 
            results.push($el.text())

            // nereye yazdiracagimizi belirlemek icin
        }).then (()=>{
            cy.step('sonuclari CypressWriteFileDoc/exampleFile a yazdirir' )
            cy.writeFile('CypressWriteFileDoc/exampleFile.txt',results)
        })

    });
});