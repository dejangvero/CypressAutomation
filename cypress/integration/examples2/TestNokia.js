/// <reference types="Cypress" />
import Homepage from "../pageObjects/Homepage"
import Productspage from "../pageObjects/Productspage"

describe('Framework tests', () => {
    before(function(){
        cy.fixture("example").then(function(data){
            globalThis.data=data
        })
    })
    it('Does not do much!', () => {
        const homepage = new Homepage()
        const productspage = new Productspage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getShopTab().click()
        globalThis.data.productName.forEach(element => cy.selectProduct(element));
        productspage.getCheckoutButton().click()
        
        

    })
})