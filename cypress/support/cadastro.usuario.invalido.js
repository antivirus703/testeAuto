/// <reference types="cypress" />
const Faker = require('faker')
/* global Then, When, Given */

let user = { email: Faker.internet.email(),
    name: {
        first: Faker.name.firstName(),
        last: Faker.name.lastName()
    }}

Given('Cliquei para me inscrever na loja', () => {
    cy.visit('').get('.login').click()
})
When('tentei me inscrever com um email invalido', () => {
    cy.get('#email_create').type(`email invalido{enter}`)
})

Then('o sistema notifica que o email utilizado e invalido', () => {
    cy.wait(3000)
})