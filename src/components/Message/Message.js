/* @flow */
import React from 'react';
import Avatar from 'material-ui/Avatar';
import './Message.scss';

type Props = MessageT & {
  isOwn: boolean,
};

export default function Message(props: Props) {
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
      <div className="Message__Content">
        <div className="Message__UserName">
          {username}
        </div>

        <div className="Message__Text">
          {message.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        <Avatar
          className="Message__Avatar"
          src={avatar}
        />
      </div>
    </div>
  );
}
