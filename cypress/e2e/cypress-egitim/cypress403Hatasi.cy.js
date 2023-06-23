describe('403 Hatasi Cozumu', () => {
    it('403 Hata sorunu', () => {
        cy.visit(('https://www.airbnb.de'),{
            headers:{"User-Agent":"axios/0.27.1"}
        })


        
    });
});