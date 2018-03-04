import fragments from '../fragments';

describe('As a user I should have no predefined name', () => {
  let userNameField;

  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('Then I should see user name field', () => {
    userNameField = fragments.userData.nameField();
    userNameField.should('be.visible');
  });

  it('And this field should be empty', () => {
    userNameField.should('have.value', '');
  });

  it('And there is no message field', () => {
    fragments.messageForm().should('not.be.visible');
  });
});
