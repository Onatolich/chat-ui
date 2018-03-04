import fragments from '../fragments';

describe('As a user I should be able to send a message', () => {
  const name = 'User-name';
  const messageText = 'Test message';

  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('And there is no messages', () => {
    fragments.messagesList.messages().should('have.length', 0);
  });

  it('And I typed my name', () => {
    fragments.userData.nameField().type(name);
  });

  it('And I typed a message', () => {
    fragments.messageForm.messageField().type(messageText);
  });

  it('When I press send button', () => {
    fragments.messageForm.sendBtn().click();
  });

  it('Then I should see that my message appeared in the chat', () => {
    fragments.messagesList.messages().should('have.length', 1);
  });

  it('And I should see that it has the same text I typed before', () => {
    const message = fragments.messagesList.messages().eq(0);
    fragments.messagesList.textOfMessage(message).should('to.contain', messageText);
  });
});
