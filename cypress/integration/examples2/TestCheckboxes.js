/// <reference types="Cypress" />

describe('Checkboxes test', () => {
    it('Does not do much!', () => {
      //Checkboxes
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get("input#checkBoxOption1").check().should('be.checked').and('have.value','option1')
      cy.get("input#checkBoxOption1").uncheck().should('not.be.checked')

      cy.get("input[type='checkbox']").check(['option2','option3'])

      //Static dropdown
      cy.get("#dropdown-class-example").select('option2').should('have.value','option2')

      //Dynamic dropdown
      cy.get("#autocomplete").type("Fran")
      cy.get(".ui-menu-item div").each((emo) => {
        if(emo.text()==="France")
        {
            emo.click()
        }
        })
      cy.get('#autocomplete').should('have.value','France')

      //Visibility of element
      cy.get("#displayed-text").should('be.visible')
      cy.get("#hide-textbox").click()
      cy.get("#displayed-text").should('not.be.visible')
      cy.get("#show-textbox").click()
      cy.get("#displayed-text").should('be.visible')

      //Radio buttons
      cy.get("input[value='radio2']").check().should('have.value','radio2').and('be.checked')


      })
  })