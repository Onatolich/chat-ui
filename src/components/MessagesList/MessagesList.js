import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import './MessagesList.scss';

export default class MessagesList extends React.PureComponent {
  isOwnMessage(message) {
    const { user } = this.props;
    return message.username === user.name && message.avatar === user.avatar;
  }

  getMessages() {
    return this.props.messages.map((message) => ({
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

MessagesList.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      username: PropTypes.string,
      message: PropTypes.string,
    })
  ),
};
