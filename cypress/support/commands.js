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

Cypress.Commands.add('login', (email, senha) => {
    cy.get('#email').type(email, {log: false})
    cy.get('#password').type(senha, {log: false})
    cy.get('#login-btn').click()      
    cy.url().should('include', 'dashboard')
})

Cypress.Commands.add('preencherCadastro', (nome, email, telefone, senha, confirmarSenha) =>{
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(telefone)
    cy.get('#password').type(senha)
    cy.get('#confirm-password').type(confirmarSenha)
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
})