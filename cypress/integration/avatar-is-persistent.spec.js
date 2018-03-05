import fragments from '../fragments';

describe('As a user I should have persistent avatar', () => {
  let storedAvatar;

  it('Given I open the chat url', () => {
    cy.visit('/');
  });

  it('And I see that I have an avatar', () => {
    storedAvatar = fragments.userData.avatar().invoke('attr', 'src');
  });

  it('When I reload the page', () => {
    cy.reload();
  });

  it('Then I should see that avatar did not change', () => {
    fragments.userData.avatar().invoke('attr', 'src').then((avatar) => {
      storedAvatar.should('be.equal', avatar);
    });
  });
});
