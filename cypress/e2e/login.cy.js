///<reference types="cypress"/>
const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() => {
    cy.screenshot();
})
describe('Login', () => {
    it('Login de sucesso', () => {
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSOWORD');
        cy.Login(email, password)
    
    });

});

    it('Login com e-mail válido e senha inválida', () => {
    cy.get(element.input_email).type(Cypress.env('EMAIL'));
    cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALIDO'));
    cy.get(element.bnt_login).click();
    cy.MsgLoginInvalido()
    });

    it('Login com e-mail inválido e senha válida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALIDO'));
        cy.get(element.input_password).type(Cypress.env('PASSOWORD'));
        cy.get(element.bnt_login).click();
        cy.MsgLoginInvalido()
        });
    it('Login com senha no email e email na senha', () => {
    cy.get(element.input_password).type(Cypress.env('EMAIL_INVALIDO'));
    cy.get(element.input_email).type(Cypress.env('PASSOWORD'));
    cy.get(element.bnt_login).click();
    cy.MsgLoginInvalido()
    });    

    