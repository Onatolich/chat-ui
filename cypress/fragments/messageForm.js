export default function messageForm() {
  return cy.get('.MessageForm');
}

messageForm.messageField = () => messageForm().get('.MessageForm__MessageField').get('textarea').eq(1);
messageForm.sendBtn = () => messageForm().get('.MessageForm__Send');
