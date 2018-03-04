import fragments from '../fragments';

describe('As a user I should have persistent user name', () => {
  const name = 'User-name';
  let userNameField;

  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('And I should see user name field is empty', () => {
    userNameField = fragments.userData.nameField();
    userNameField.should('have.value', '');
  });

  it('And I type my name to the field', () => {
    userNameField.type(name);
  });

  it('When I reload the page', () => {
    cy.reload();
  });

  it('Then I should see that my name is not changed', () => {
    userNameField.should('have.value', name);
  });
});
