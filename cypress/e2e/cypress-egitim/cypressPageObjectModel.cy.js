import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom=new Homepage()

import HomepageSecond from "../../pageObjectModel/homepageSecond";


describe('Page Object 1. Kullanimi', () => {
    it('Page Object Model Kullanim Ornekleri', () => {
        homepagePom.navigate()
        homepagePom.pricingBtn()

    //.navigate return this; kullanirsak bu sekilde cagirabiliriz
    });
});


describe.only('Page Object Model 2.Kullanim', () => {
    it('Page Object Model Kullanim Ornekleri', () => {
        HomepageSecond.navigate()
        HomepageSecond.pricingBtn.click()

        // Bu sekilde Assertion yaparakta kullanilabilir.
      //  HomepageSecond.pricingBtn.should('be.visible').and('contain',"Pricing").click()
        

    //.navigate return this; kullanirsak bu sekilde cagirabiliriz
    });
});

/*
1.Yöntem

Test sayfasi acip Homepage const'unu import ediyoruz sonra 
const yazarak homepage deki yapilan islemleri cagirmak icin
olusturuyouz bknz yukarida
*/