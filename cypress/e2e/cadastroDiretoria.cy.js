import { faker } from '@faker-js/faker';

///<reference types="cypress"/>
const element = require("../fixtures/login.json")
beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
    cy.get(element.input_email).type(Cypress.env('EMAIL'));
    cy.get(element.input_password).type(Cypress.env('PASSOWORD'));
    cy.get(element.bnt_login).click();
    cy.contains('Cadastros').click();
    cy.contains('Diretorias').click();
    cy.contains('Novo Cadastro').click();
  });
  
it('New_Board', () =>{
    const boardName = faker.company.name();
  cy.New_Board(boardName);
})  
