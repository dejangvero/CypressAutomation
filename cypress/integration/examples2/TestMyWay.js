///<reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductsPage'

 
describe('Framework tests', () => {
    before(function(){
        cy.fixture("example").then(function(data){
            globalThis.data=data
        })
    }) 
    it('My first Test case', function(){       
        const homePage = new HomePage()
        const productPage = new ProductPage() 
        cy.visit(Cypress.env('url')+"/angularpractice/")
        homePage.getShopTab().click()
        globalThis.data.productName.forEach(element => cy.selectProduct(element)); 
        productPage.getCheckoutButton().click()              
        productPage.getAndCompareSum()
        cy.contains('Checkout').click()      
        cy.get('#country').type('France')      
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()      
        productPage.getTextElement().should("be.visible")
    })
})