/// <reference types="cypress" />

/* global Then, When, Given */


When('tentei me inscrever com um email invalido', () => {
    cy.get('#email_create').type(`email invalido {enter}`)
})

Then('o sistema notifica que o email utilizado é invalido', () => {
    cy.get('#create_account_error').should('be.be.visible')
    .find('ol > li').should('have.text','Invalid email address.')
})