/// <reference types="Cypress" />

describe('Framework tests', () => {

    it('API mocking', () => {
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.server()
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response:{
                error:"An error has occurred, please contact the system administrator!"
            },     
            delay: 500,
          }).as('putComment')
        
          cy.get(".network-put").click()
          cy.get(".network-put-comment").should('contain',"An error has occurred, please contact the system administrator!")
    })
})