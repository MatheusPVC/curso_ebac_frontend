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

    it('Deverá editar o ultimo contato', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Zetsu Preto Sinistro')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('soleiomadara@teste.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('00 00112233')
        cy.get('.alterar').click()
        cy.contains('Zetsu Preto Sinistro').should('exist')
    })

    it('Deverá excluir um contato', () => {
        cy.get('.delete').last().click()
        cy.get('.contato').should('have.length', 3)
    })
})