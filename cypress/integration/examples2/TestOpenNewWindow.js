/// <reference types="Cypress" />

describe('Checkboxes test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").then(function(el)
        {
            const url = el.prop("href")
            cy.visit(url)
        })

    })
})