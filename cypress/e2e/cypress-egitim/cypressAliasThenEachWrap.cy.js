describe('Alias Then Each Wrap', () => {
    it('Kullanim Ornegi', () => {

        let itemlength
        cy.visit('https://www.shopist.io')

        cy.get('.navbar-section a').as('NavbarMenus')  // Alias kullanimi
        cy.get('@NavbarMenus').then(($el)=>{           // then kullanimi
            itemlength=$el.length
           
        }).each(($el, index)=>{                         // basliklarin numaralandirmak icin index belirliyoruz   each kullanimi

            cy.get('@NavbarMenus').should('be.visible')
         //   cy.log($el.text())   
         cy.log('Navbar Menu '+index+": "+$el.text())    // bu sekilde yazarak numaralandirma yapiyoruz ce daha güzel bir cikti almak icin


         if ($el.text().includes('Cart')) {  //Wap kullanimi
            cy.wrap($el).click()      // Herbir manudeki text e bakacak ve Cart iceren menu varsa ona tiklayacak
         }






        })
    });
});