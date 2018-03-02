import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './model/store';
import ChatApp from './components/ChatApp';

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('chat-root')
);
