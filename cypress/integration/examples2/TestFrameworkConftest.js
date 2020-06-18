/// <reference types="Cypress" />

describe('Framework tests', () => {
    before(function(){
        cy.fixture("example").then(function(data){
            globalThis.data=data
        })
    })
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input").type(globalThis.data.name)
        cy.get("select").select(globalThis.data.gender)

    })
})