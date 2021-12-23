/// <reference types="cypress" />

/* global Then, When, Given */


When('tentei me inscrever com um email que ja esta em uso', () => {
    cy.get('#email_create').type(`teste@qazando.com{enter}`)
})

Then('o sistema notifica que o email utilizado ja esta sendo usado por outro usuario', () => {
    cy.get('#create_account_error').should('be.be.visible')
    .find('ol > li').should('have.text','An account using this email address has already been registered. Please enter a valid password or request a new one. ')
})