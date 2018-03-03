/* @flow */
import React from 'react';

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
      {message}
    </div>
  );
}
