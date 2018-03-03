import React from 'react';
import AppBar from 'material-ui/AppBar';
import './Header.scss';

export default function Header() {
  const title = (
    <div className="Header__Title">
      <span className="Header__Logo" />
      Chat UI
    </div>
  );

  return (
    <AppBar
      className="Header"
      title={title}
      showMenuIconButton={false}
    />
  );
}
