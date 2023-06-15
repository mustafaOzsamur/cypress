
describe('Shadow ve Find Kullanimi', () => {


     //uncaught exception hatasi alinirsa bu kod blogu yazilarak hata giderilebilir
    before(() => {
        cy.on('uncaught:exception',(err,runnable) => {return false})
    });





    it('Shadow ve Find Kullanim Ornek Test', () => {
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html')

        //Agree to All butonuna tiklayacagiz

        cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]').shadow()
              .find('cmm-buttons-wrapper[class="hydrated"]')
              .find('[data-test="handle-accept-all-button"]')
              .should('be.visible').contains('Agree to all').click()


//Shadow ic ice elementler oldugu icin locate ler yukardan asagiya dogru aliriz ve assertion yapabiliriz
// ayrica text verip eger elementin icinde bu text varsa tiklariz.

    });
});