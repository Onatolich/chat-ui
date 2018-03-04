import fragments from '../fragments';

describe('As a user I should be able to open the chat', () => {
  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('Then I should see that chat is rendered', () => {
    fragments.app().should('be.visible');
  });
});
