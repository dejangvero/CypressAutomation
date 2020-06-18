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
        // Cypress.config('defaultCommandTimeout', 8000)
        //create an object for the class
        const homePage = new HomePage()
        const productPage = new ProductPage() 
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getShopTab().click()
        globalThis.data.productName.forEach(element => cy.selectProduct(element)); 
        productPage.getCheckoutButton().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {
            const amount=$e1.text()
            var res= amount.split(" ")
            res= res[1].trim()
            sum= Number(sum)+Number(res)      
        }).then(function()
        {
            cy.log(sum)
        })    
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res=amount.split(" ")
            var total=res[1].trim()       
            expect(Number(total)).to.equal(Number(sum))
        })
    
        cy.contains('Checkout').click()      
        cy.get('#country').type('France')      
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()      
        productPage.getTextElement().should("be.visible")
    })
})