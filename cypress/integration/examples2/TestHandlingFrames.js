/// <reference types="Cypress" />
import 'cypress-iframe'

describe('Checkboxes test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='#/mentorship']").eq(0).click()
        cy.iframe().find(".pricing-header").should("have.length",2)

    })
})