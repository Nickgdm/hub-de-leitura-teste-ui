describe('Funcionalidade: Contato', () => {
  beforeEach(() => {
    cy.visit('index.html')
  });

  it("Deve preencher fomulário de contato com sucesso", () => {
    cy.get('[name="name"]').type('Nicollas Gon')
    cy.get('[name="email"]').type('nicollas@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher nome", () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('nicollas@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher email", () => {
    cy.get('[name="name"]').type('Nicollas Gon')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher assunto", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Nicollas Gon')
    cy.get('[name="email"]').type('nicollas@teste.com')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher mensagem", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Nicollas Gon')
    cy.get('[name="email"]').type('nicollas@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });
})