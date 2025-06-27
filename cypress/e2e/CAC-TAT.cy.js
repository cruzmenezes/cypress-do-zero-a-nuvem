describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')

    })
  it('verifica o título da aplicação', () => {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })
  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Edson Victor')
    cy.get('#lastName').type('menezes')
    cy.get('#email').type('cruz.menezes@outlook.com')
    cy.get('#phone').type('11 96182-1385')
    cy.get('#open-text-area').type('Jesus é o caminho a verdade e a vida!!!!')
    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})
