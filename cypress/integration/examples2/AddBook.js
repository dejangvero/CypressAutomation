/// <reference types="Cypress" />

describe('Framework tests', () => {
    it('API mocking', () => {
        cy.request("POST","https://reqbin.com/echo/post/json",
        {"login":"Dejan","password":"Gvero"}).then(function(response){
            expect(response.body).to.have.property("success","true")
            expect(response.status).to.eq(200)
           })
    })
})