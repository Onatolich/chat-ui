import React from 'react';
import PropTypes from 'prop-types';

export default function Message(props) {
  const {
    avatar,
    username,
    message,
    isOwn,
  } = props;

  const classNames = ['Message'];
  if (isOwn) {
    classNames.push('Message--own');
  }

  return (
    <div className={classNames.join(' ')}>
      {message}
    </div>
  );
}

Message.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOwn: PropTypes.bool,
};
