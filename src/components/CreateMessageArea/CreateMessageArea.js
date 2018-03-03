/* @flow */
import React from 'react';
import EditableUserData from '../EditableUserData';
import MessageForm from '../MessageForm';
import './CreateMessageArea.scss';

type Props = {
  user: UserT,
};

export default function CreateMessageArea({ user }: Props) {
  return (
    <div className="CreateMessageArea">
      <div className="CreateMessageArea__Content">
        <EditableUserData />
        {!!user.name.length && <MessageForm />}
      </div>
    </div>
  );
}
