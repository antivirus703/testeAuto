/// <reference types="cypress" />
/* testesdonorton@teste.com */

/* global Then, When, Given */

When('preencho os dados de login sem informar senha', () => {
    global.usuario.email = 'testesdonorton@teste.com'
    let backupsenha = global.usuario.senha
    global.usuario.senha = ' '
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type('global.usuario.senha').then(()=>{ global.usuario.senha = backupsenha })
})
Then('o sistema notifica que e necessario informar uma senha', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
    .find('ol > li').should('have.text','Authentication failed.')
})