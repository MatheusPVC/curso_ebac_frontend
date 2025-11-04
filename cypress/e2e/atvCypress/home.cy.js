/// <reference types="cypress" />

describe('Testes da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deverá adicionar um contato', () => {
        cy.get('input[type="text"]').type('Zetsu Branco')
        cy.get('input[type="email"]').type('filhinhodekaguya@teste.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('button.adicionar').click()
        cy.get('.contato').should('have.length.greaterThan', 3)
    })

    it('Deverá editar o primeiro contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Zetsu Preto')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('soleiomadara@teste.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('00 00112233')
        cy.get('.alterar').click()
    })

    it('Deverá excluir um contato', () => {
        cy.get('.delete').first().click()
        cy.get('.contato').should('have.length', 3)
    })
})