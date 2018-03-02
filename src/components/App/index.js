import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Header from '../Header';
import MessagesList from '../MessagesList';
import CreateMessageArea from '../CreateMessageArea';
import './App.scss';

export default function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Paper className="App__Container">
          <Header />
          <MessagesList />
          <CreateMessageArea />
        </Paper>
      </div>
    </MuiThemeProvider>
  );
}
