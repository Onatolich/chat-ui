export default function messageForm() {
  return cy.get('.MessageForm');
}

messageForm.sendBtn = () => messageForm().get('.MessageForm__Send');
