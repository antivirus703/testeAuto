/// <reference types="cypress" />

/* testesdonorton@teste.com */

/* global Then, When, Given */

When('preencho os dados de login sem informar email', () => {
    global.usuario.email = ' '
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type('global.usuario.senha')
})

Then('o sistema notifica que e necessario informar um email', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
    .find('ol > li').should('have.text','An email address required.')
})
