/// <reference types="Cypress" />
import Homepage from "../pageObjects/Homepage"

describe('Framework tests', () => {
    before(function(){
        cy.fixture("example").then(function(data){
            globalThis.data=data
        })
    })
    it('Does not do much!', () => {
        const homepage = new Homepage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getEditBox().type(globalThis.data.name)
        homepage.getGender(globalThis.data.gender)
        homepage.getTwoWayDataBinding().should("have.value",globalThis.data.name)
        homepage.getEditBox().should("have.attr","minlength","2")
        homepage.getEntrepreneurRadioButton().should("be.disabled")

        homepage.getShopTab().click()


    })
})