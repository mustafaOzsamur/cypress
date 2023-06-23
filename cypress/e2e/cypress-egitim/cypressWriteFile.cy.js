describe('Cypress Write File', () => {
    it('write File', () => {
    // Cypress ana klasörünün icinde bir dosya olusturmak icin
    cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Sifirdan cypress derslerine hosgeldiniz')

    // {flag: 'a+'} bir önceki text'i silmemesi icin bu ifadeyi yaziyoruz. 
    // bu ifadeyi yazmazsak en son satirdaki yazilani dosya icerisine yazacaktir digerlerini silecektir
    cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Isvicre dünyanin en güzel ülkesi',{flag: 'a+'})

    });
});