describe('Login page test', () => {
  beforeEach(() => {
    cy.wait(2000);
  });

  it('Visits login page and verify form exist', () => {
    cy.visit('/login');
    cy.wait(2000);
    cy.get('.form-login').should('exist');
    cy.get('.nav-item:last-child a').should('have.class', 'active');
  });

  it('Validate email and password in form', () => {
    cy.visit('/login');
    cy.get("input[name='email']").type('abc');
    cy.get("input[name='email']").blur();
    cy.get("input[name='email']~.text-danger").contains('Email invalid');
    cy.wait(2000);

    cy.get("input[name='password']").type('123');
    cy.get("input[name='password']").blur();
    cy.get("input[name='password']~.text-danger").contains('Required password');
    cy.wait(2000);

    cy.get('button').should('be.disabled');
  });

  it('Login with a valid account', () => {
    cy.visit('/login');
    cy.get("input[name='email']").type('abc@gmail.com');
    cy.get("input[name='password']").type('123456');
    cy.wait(2000);
    cy.get('button').click();
    cy.url().should('include', '/home');
  });
});
