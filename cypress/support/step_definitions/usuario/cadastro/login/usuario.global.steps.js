/// <reference types="cypress" />
/* global Then, When, Given */
//Inserido em global steps pois o GIVEN é identico em todos os cenários//

Given('Cliquei para realizar sign-in', () => {
    cy.visit('').get('.login').click()
    .url().should('include','controller=authentication&back=my-account')
})