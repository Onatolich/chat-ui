export default function messagesList() {
  return cy.get('.MessagesList');
}

messagesList.noMessages = () => messagesList().get('.MessagesList__NoMessages');
messagesList.messages = () => messagesList().get('.Message');
messagesList.textOfMessage = message => message.get('.Message__Text');
