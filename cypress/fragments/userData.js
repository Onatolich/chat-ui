export default function userData() {
  return cy.get('.EditableUserData');
}

userData.avatar = () => userData().get('.EditableUserData__Avatar');
userData.nameField = () => userData().get('.EditableUserData__UserName input');
