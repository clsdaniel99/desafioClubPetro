/// <reference types="cypress" />

describe('Desafio ClubPetro', () => {
    beforeEach(() => {
        cy.visit('https://clubpetro.com/')
        cy.wait(1000)
        cy.get('#cookie_action_close_header').click()
    });

    it('Interação com a navegação', () => {
        cy.get('#menu-item-dropdown-87361').click()
        cy.get('#menu-item-84839').click();
        cy.url().should('include', '/sobre') //Validação da URL: https://clubpetro.com/sobre/
        cy.contains("Feito de revendedor para revendedor") //Validação do título
        cy.get('.col-md-6').should('be.visible') //Validação da imagem 
        cy.scrollTo(0, 700)
        cy.get('.embed-responsive').should('be.visible') //Validação do vídeo
        cy.scrollTo(0, 2000)
        cy.contains("2021 ClubPetro. Todos os direitos reservados.") //Validação do copyright
        cy.get('#menu-item-87372').click()

        //Preenchimento do formulário
        cy.url().should('include', '/contato') //Validação da URL: https://clubpetro.com/contato/
        cy.get('#fullname').type('João Roberto Faria', {force:true})
        cy.get('#email').type('joaoroberto@teste.com', {force:true})
        cy.get('#phone').type(84375654003, {force:true})
        cy.get('[data-name=relacao_com_posto2]').select('Dono(a) ou Diretor(a)', {force:true})
        cy.get('[data-name=nome_da_rede]').type('Posto Teste', {force:true})
        cy.get('[data-name=cnpj]').type(28473880000132, {force:true})
        cy.get('[data-name=expectativa_com_clubpetro]').type('Melhor gerenciamento do posto', {force:true})
        cy.get('._field99 > ._form-fieldset > ._checkbox-radio').contains("Ao informar meus dados").click({force:true})
        cy.get('._field100 > ._form-fieldset > ._checkbox-radio').contains("Desejo").click({force:true})
        //cy.get('button[type="submit"]').click()
        //Na realização do teste me deparei com um erro de redirecionamento no framework. 
        //Pesquisei e não encontrei uma solução para o erro, muitas pessoas que utilizam o framework sofrem do mesmo erro        
    });
});
