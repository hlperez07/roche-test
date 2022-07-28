// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitMainPage', () => {
    cy.visit('')
    // Verify Home page
    cy.title().should('equal','Open Wine Database')
    cy.contains('Regions').should('be.visible')
    cy.contains('Wines').should('be.visible')
    cy.contains('Wine details').should('be.visible')
})

Cypress.Commands.add('writeAComment',()=>{
    cy.get('.card-action').contains('Comment ').should('be.visible').click()
    cy.get('.modal-content').should('be.visible')
    const fakeNow = new Date().valueOf();
    const comment = 'comment thought cypress' + fakeNow
    cy.get('#inputComment').type(comment)
    cy.get('.modal-footer').contains('Submit').click()
    cy.contains(comment).should('be.visible')
})

Cypress.Commands.add('likeAWine', () =>{
    cy.get('.card-action').contains('Like ').should('be.visible').click()
} )

Cypress.Commands.add('unLikeAWine', () =>{
    cy.get('.card-action').contains('Unlike ').should('be.visible').click()
} )