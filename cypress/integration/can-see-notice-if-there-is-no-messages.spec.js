import fragments from '../fragments';

describe('As a user I should see notice if there is no messages', () => {
  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('Then I should see a no messages notice', () => {
    fragments.messagesList.noMessages().should('be.visible');
  });
});
