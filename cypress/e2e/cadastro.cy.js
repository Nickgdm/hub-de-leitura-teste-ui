/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });
  
    it('Deve fazer o cadastro com sucesso função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Nicollas Gon')
        cy.get('#email').type(email)
        cy.get('#phone').type('11123456789')
        cy.get('#password').type('Nick@123')
        cy.get('#confirm-password').type('Nick@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer o cadastro com sucesso usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11123456789')
        cy.get('#password').type('Nick@123')
        cy.get('#confirm-password').type('Nick@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let nome = faker.person.fullName({ sex: 'male' })
        let email = `teste${Date.now()}@teste.com`
        cy.preencherCadastro(
            nome,
            email,
            '11123456789',
            'Nick@123',
            'Nick@123'
        )
        cy.url().should('include', 'dashboard')
    });
})