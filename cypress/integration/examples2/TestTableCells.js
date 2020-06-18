/// <reference types="Cypress" />

describe('Checkboxes test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("tr td:nth-child(2)").each((emo, index) => {
            if(emo.text()==="Master Selenium Automation in simple Python Language")
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
            })
        cy.get("#product > tbody > tr:nth-child(9) > td:nth-child(2)").should('have.text','Master Selenium Automation in simple Python Language')
    })
})