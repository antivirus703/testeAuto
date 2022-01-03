/// <reference types="cypress" />
/* global Then, When, Given */


When('preencho os dados de login com um usuario valido, pressionando enter apos', () => {
    global.usuario.email = 'testesdonorton@teste.com'
    global.usuario.nome = 'Norton Berbert'
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(`${global.usuario.senha}{enter}`)
})
