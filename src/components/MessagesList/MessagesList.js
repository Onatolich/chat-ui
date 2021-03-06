/* @flow */
import React from 'react';
import Message from '../Message';
import './MessagesList.scss';

type Props = {
  user: UserT,
  messages: MessagesListT,
};

type State = {
  stick: boolean,
};

export default class MessagesList extends React.PureComponent<Props, State> {
  wrap: HTMLElement;
  content: HTMLElement;

  componentDidMount() {
    this.scrollToEnd();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.scrollToEnd();
    }
  }

  scrollToEnd() {
    if (!this.wrap || !this.content) {
      return;
    }

    this.wrap.scrollTop = this.content.clientHeight;
  }

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
    const messages = this.getMessages();
    if (!messages.length) {
      return (
        <div className="MessagesList__NoMessages">
          There is no messages yet. Go ahead - say something!
        </div>
      );
    }

    return messages.map((message, key) => (
      <Message {...message} key={key} />
    ));
  }

  render() {
    return (
      <div className="MessagesList">
        <div
          className="MessagesList__Wrap"
          ref={(wrap) => { (this: any).wrap = wrap; }}
        >
          <div
            className="MessagesList__Content"
            ref={(content) => { (this: any).content = content; }}
          >
            {this.renderMessagesList()}
          </div>
        </div>
      </div>
    );
  }
}
