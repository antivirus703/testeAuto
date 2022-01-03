/// <reference types="cypress" />
/* testesdonorton@teste.com */

/* global Then, When, Given */

When('preencho os dados de login com um usuario valido e senha incorreta', () => {
    global.usuario.email = 'testesdonorton@teste.com'
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type('senha invalida')
})
