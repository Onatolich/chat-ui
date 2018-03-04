import utils from '../utils';
import fragments from '../fragments';

describe('As a user I should be able to receive messages from other users', () => {
  const messageText = 'Other user test message';

  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('And there is no messages', () => {
    fragments.messagesList.messages().should('have.length', 0);
  });

  it('When another user sends a message', () => {
    utils.sendMessage('avatar', 'Another user name', messageText);
  });

  it('Then I should see that this message appeared in the chat', () => {
    fragments.messagesList.messages().should('have.length', 1);
  });

  it('And I should see that it has the same text that user typed before', () => {
    const message = fragments.messagesList.messages().eq(0);
    fragments.messagesList.textOfMessage(message).should('to.contain', messageText);
  });
});
