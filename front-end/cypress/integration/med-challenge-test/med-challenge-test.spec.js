/* eslint-disable no-undef */

describe('Med Dev Challenge', () => {
  describe('Landing Page', () => {
    it('Should render logo image', () => {
      cy.visit('/');
      cy.get('[data-cy=logo-image]').should('to.have.length', 1);
    });

    it('Should render create patient button', () => {
      cy.visit('/');
      cy.contains('Cadastrar Paciente');
    });

    it('Should render list patients button', () => {
      cy.visit('/');
      cy.contains('Listar Pacientes');
    });

    it('Should redirect to create patient page when create button is clicked', () => {
      cy.visit('/');
      cy.get('[data-cy=create-button]').click();
      cy.location('pathname').should('eq', '/create-patient');
    });

    it('Should redirect to list patients page when list button is clicked', () => {
      cy.visit('/');
      cy.get('[data-cy=list-button]').click();
      cy.location('pathname').should('eq', '/list-patients');
    });
  });

  describe('Create Patient Page', () => {
    it('should render white logo and page title', () => {
      cy.visit('/create-patient');
      cy.get('[data-cy=white-logo]').should('to.have.length', 1);
      cy.contains('Cadastrar Paciente');
    });

    it('should create new patient when name and birth date is filled', () => {
      cy.visit('/create-patient');
      cy.get('[data-cy=name-input]').type('Nome do Usuário Teste');
      cy.get('[data-cy=birth-date-input]').type('1989-01-10');
      cy.get('[data-cy=submit-button]').click();
      cy.location('pathname').should('eq', '/list-patients');
    });

    it('should redirect to list page when back button is clicked', () => {
      cy.visit('/create-patient');
      cy.get('[data-cy=back-button]').click();
      cy.location('pathname').should('eq', '/list-patients');
    });
  });

  describe('List Patients Page', () => {
    it('should render white logo and page title', () => {
      cy.visit('/list-patients');
      cy.get('[data-cy=white-logo]').should('to.have.length', 1);
      cy.contains('Pacientes Cadastrados');
    });

    it('should list created user', () => {
      cy.visit('/list-patients');
      cy.contains('Nome do Usuário Teste');
    });

    it('should redirect to create page when new patient button is clicked', () => {
      cy.visit('/list-patients');
      cy.get('[data-cy=new-patient]').click();
      cy.location('pathname').should('eq', '/create-patient');
    });

    it('should redirect to landing page when back button is clicked', () => {
      cy.visit('/list-patients');
      cy.get('[data-cy=back-button]').click();
      cy.location('pathname').should('eq', '/');
    });
  });
});
