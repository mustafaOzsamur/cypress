describe('Screenshot Kullanimi', () => {
    before(() => {
        cy.on('uncaught:exceptio',(err,runnable)=>{return false})
    });
    it('Ekran Goruntusu Alalim', () => {
        cy.visit('https://www.amazon.de')
        cy.screenshot() // icine dosya yolu yazarsaniz screenshot oraya kayit edilir
    });
});