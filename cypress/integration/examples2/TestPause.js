/// <reference types="Cypress" />

describe('Framework tests', () => {
    before(function(){
        cy.fixture("example").then(function(data){
            globalThis.data=data
        })
    })
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("body > app-root > app-navbar > div > nav > ul > li:nth-child(2) > a").click()
        cy.pause()
        globalThis.data.productName.forEach(element => cy.selectProduct(element));
        

    })
})