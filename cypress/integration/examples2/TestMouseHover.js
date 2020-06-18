/// <reference types="Cypress" />

describe('Checkboxes test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains("Top").click()        
        cy.url().should('include','top')
        //cy.get('body > div:nth-child(6) > div > fieldset > div > div > a:nth-child(2)').click({ force: true })
        cy.contains('Reload').click({ force: true })

    })
})