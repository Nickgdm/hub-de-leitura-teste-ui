/// <reference types="cypress"/>
import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: Busca no catálogo', () => {
    
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer a busca do livro 1984', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title').should('contain', '1984')
    });

    it('Deve fazer a busca do livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        cy.get('.card-title').should('contain', catalogo[0].livro)
    });
});