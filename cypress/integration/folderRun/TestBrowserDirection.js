// <reference types="Cypress" />

describe('Checkboxes test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.url().should("include","index")
        cy.go("back")
        cy.url().should("include","AutomationPractice")

    })
})