describe('Trigger Kullanimi', () => {
    it('Mouseover Kullanimi', () => {
        cy.visit('https://www.amazon.de/')

        // üzerinde mouse ile bekleyince acilan elementler icin z.b move to elements
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover') // trigger mouse harekerleri
       // cy.get('div#nav-flyout-ya-signin span').click()
        cy.get('div#nav-al-your-account a:nth-child(2) > span').click()
    });

    it('Mouseover Kullanimi-2', () => {
        cy.visit('https://www.amazon.de/')

        // mouse nin sol tiklamasi icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown',{button:0}) 
        //mouse nin orta butonu icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown',{button:1}) 
        // mouse nin sag tiklamasi icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown',{button:2}) 
        cy.get('div#nav-al-your-account a:nth-child(10) > span').click()
    });
});