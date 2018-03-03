/* @flow */
import React from 'react';
import './NoConnection.scss';

type Props = {
  socket: {
    connected: boolean,
  },
};

export default function NoConnection({ socket }: Props) {
  if (socket.connected) {
    return null;
  }

  return (
    <div className="NoConnection">
      <div className="NoConnection__Notice">
        Connecting to server...
      </div>
    </div>
  );
}
