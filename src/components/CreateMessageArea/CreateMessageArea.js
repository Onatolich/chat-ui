import React from 'react';
import PropTypes from 'prop-types';
import EditableUserData from '../EditableUserData';
import MessageForm from '../MessageForm';
import './CreateMessageArea.scss';

export default function CreateMessageArea({ user }) {
  return (
    <div className="CreateMessageArea">
      <div className="CreateMessageArea__Content">
        <EditableUserData />
        {!!user.name.length && <MessageForm />}
      </div>
    </div>
  );
}

CreateMessageArea.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};
