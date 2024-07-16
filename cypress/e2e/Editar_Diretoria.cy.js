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
    cy.contains('Editar').click()
  });

it('Editar_Cadastro', () =>{
    const EditBoard = faker.string.fromCharacters('abc', 3); // 'cbbbacbacb'();
    cy.Editar_Cadastro(EditBoard);
  })

it('editar diretoria com 51 caractere', () =>{
  const EditaDIretoriaIn = faker.string.fromCharacters('abc', 51);; // 'cbbbacbacb'(); 
  cy.MsgeditarInvalido(EditaDIretoriaIn);
  })