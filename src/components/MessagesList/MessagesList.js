/* @flow */
import React from 'react';
import Message from '../Message';
import './MessagesList.scss';

type Props = {
  user: UserT,
  messages: MessagesListT,
};

export default class MessagesList extends React.PureComponent<Props> {
  isOwnMessage(message: MessageT): boolean {
    const { user } = this.props;
    return message.username === user.name && message.avatar === user.avatar;
  }

  getMessages() {
    return this.props.messages.map(message => ({
      ...message,
      isOwn: this.isOwnMessage(message),
    }));
  }

  renderMessagesList() {
    return this.getMessages().map((message, key) => (
      <Message {...message} key={key} />
    ));
  }

  render() {
    return (
      <div className="MessagesList">
        {this.renderMessagesList()}
      </div>
    );
  }
}
