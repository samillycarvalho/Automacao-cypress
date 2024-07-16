///<reference types="cypress"/>
Cypress.Commands.add('Login',(email, password ) =>{
 cy.get('#email').type(email)
 cy.get('#password').type(password)
 cy.get('#login').click();
 cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/login');
})
cy.get('body > nav >button').should('be.visible')
cy.location().should((loc) => {
    expect(loc.pathname).to.eq('/home');
})
});

Cypress.Commands.add('MsgLoginInvalido',() =>{
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text','E');
   
   });
Cypress.Commands.add('new_user', (fullName, email, accessProfile, password, confirmPassword, cpf) => {
    cy.get('#fullName')
      .should('be.visible')
      .type(fullName); // Use a variável fullName
    cy.get('#mail')
      .should('be.visible')
      .type(email); // Use a variável email
    cy.get('#accessProfile')
      .should('be.visible')
      .type(accessProfile); // Use a variável accessProfile e .select() para dropdown
    cy.get('#cpf')
      .should('be.visible')
      .type(cpf); // Use a variável cpf
    cy.get('#password')
      .should('be.visible')
      .type(password); // Use a variável password
    cy.get('#confirmPassword')
      .should('be.visible')
      .type(confirmPassword); // Use a variável confirmPassword
    cy.contains('SALVAR NOVO').click({force: true});
});

Cypress.Commands.add('New_Board', (BoardName) => {
  const name = BoardName || faker.company.name();
  cy.get('#boardName')
  .should('be.visible')
  .type(BoardName);
  cy.contains('SALVAR NOVO').click({force: true});
});    


Cypress.Commands.add('Editar_Cadastro', (EditBoard) => {
  const name = EditBoard || faker.company.name();
cy.get('#boardName')
.should('be.visible')
.type(EditBoard)
cy.contains('SALVAR ALTERAÇOES').click({force: true});
});

Cypress.Commands.add('MsgeditarInvalido',(EditaDIretoriaIn) =>{
 const name = EditaDIretoriaIn || faker.company.name();
 cy.get('#boardName')
 .should('be.visible')
.type(EditaDIretoriaIn)
  cy.contains('SALVAR ALTERAÇOES').click({force: true});
cy.get('[class="css-bbipig"]').should('have.text',"O campo diretoria pode ter no máximo 50 caracteres");
});
