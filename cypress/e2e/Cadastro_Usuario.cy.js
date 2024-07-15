import { faker } from '@faker-js/faker';


///<reference types="cypress"/>
const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
    cy.get(element.input_email).type(Cypress.env('EMAIL'));
    cy.get(element.input_password).type(Cypress.env('PASSOWORD'));
    cy.get(element.bnt_login).click();
    cy.contains('Cadastros').click();
    cy.contains('Usuários').click();
    cy.contains('Novo Cadastro').click();
  
  });
  

  it('new_user', () => {
    const fullName = faker.person.fullName(); // Gera um nome completo dinâmico
    const email = faker.internet.email(); // Gera um email dinâmico
    const accessProfile = "ADMIN"; // Define o perfil de acesso
    const cpf = faker.string.numeric(11); // Gera um CPF dinâmico (11 dígitos)
    const password = '1234@Test'; // Define uma senha
    const confirmPassword = password; // Confirma a senha
   

    cy.new_user(fullName, email, accessProfile, password, confirmPassword, cpf);
});