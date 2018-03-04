import fragments from '../fragments';

describe('As a user I should have predefined avatar', () => {
  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('Then I should see that I have a predefined avatar', () => {
    const avatar = fragments.userData.avatar().invoke('attr', 'src');
    avatar.should('have.length.above', 10);
  });
});
