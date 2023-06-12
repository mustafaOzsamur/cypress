export class Homepage {
    navigate(){
        cy.visit('https://www.cypress.io')
      //  return this;
    }

    pricingBtn(){
        cy.get('nav > div > ul > li:nth-child(5) > a').click()
      //  return this;
    }
}

// return this; 
// dedigimizde test class'imizda bir kez homapagePom. kullanmamiz yeterli 
// bundan sonra const cagirirsak homapegePom demeye gerek yok

/*

POM'u iki yontemle kullanabiliriz

1.Yöntem 
oncelikler proje kökeninde bulunan 
"cypress" icerisine bir klasör aciyoruz.

bu klasörün icerisine "js" uzantili bir dosya aciyoruz 
wie homepage.js

ve icerisine navigate mizi koyuyoruz
*/