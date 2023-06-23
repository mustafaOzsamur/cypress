describe('Chrome Extensions 1', function() {

    it('Extensions', function() {
   
       cy.viewport(1280, 569)
    
       cy.visit('https://shopist.io/')
    
       cy.get('.navigation > .navbar-section > .lighting > .menu-item-large-container > .menu-item-large').click()
    
       cy.visit('https://shopist.io/department/lighting')
    
       cy.get('.product-card-container:nth-child(2) > div > a > .product-card > img').click()
    
       cy.visit('https://shopist.io/department/lighting/product/29')
    
       cy.get('section > .item > .description > div > .purchase-button').click()
    
       cy.get('section > .item > .description > div > .purchase-button').click()
    
       cy.get('.navigation > .navbar-section > .cart > .menu-item-large-container > .menu-item-large').click()
    
       cy.visit('https://shopist.io/cart')
    
       cy.get('.product-description > .product-bottom > .product-counter > div > .operator:nth-child(1)').click()
    
       cy.get('.product-description > .product-bottom > .product-counter > div > .operator:nth-child(1)').click()
    
       cy.get('.product-description > .product-bottom > .product-counter > div > .operator:nth-child(1)').click()
    
       cy.get('#main > .cart > .blocks > .summary > .checkout').click()
    
       cy.get('div > .navbar-large > a > .brand-large > img').click()
    
       cy.visit('https://shopist.io/')
    
       cy.get('#\__layout > div > .modal-error > .modal-error-content > .modal-button').click()
    
         })

         describe('Chrome Extensions-2', () => {
            it('Extensions 2', () => {
                cy.visit('https://shopist.io/');
cy.url().should('contains', 'https://shopist.io/department/sofas');
cy.url().should('contains', 'https://shopist.io/department/sofas/product/10');
cy.get('.purchase-button').click();
cy.url().should('contains', 'https://shopist.io/cart');
cy.url().should('contains', 'https://shopist.io/profile');
cy.url().should('contains', 'https://shopist.io/');
cy.url().should('contains', 'https://shopist.io/department/bedding');
cy.url().should('contains', 'https://shopist.io/department/lighting');
cy.url().should('contains', 'https://shopist.io/department/lighting/product/29');
cy.get('.purchase-button').click();
cy.url().should('contains', 'https://shopist.io/cart');
cy.get('.checkout').click();
cy.url().should('contains', 'https://shopist.io/');

            });
         });
   
   })
   