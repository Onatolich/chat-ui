import fragments from '../fragments';

describe('As a user I should see message form if name is defined', () => {
  const name = 'User-name';
  let messageForm;

  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('And I should not see message form', () => {
    messageForm = fragments.messageForm();
    messageForm.should('not.be.visible');
  });

  it('When I type my name to the field', () => {
    fragments.userData.nameField().type(name);
  });

  it('Then I should see message form', () => {
    messageForm.should('be.visible');
  });
});
