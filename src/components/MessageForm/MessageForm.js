/* @flow */
import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';

import './MessageForm.scss';

type Props = {
  sendMessage: (message: string) => void,
};

type State = {
  message: string,
};

export default class MessageForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: '',
    };

    const self = (this: any);

    self.onChange = this.onChange.bind(this);
    self.onKeyUp = this.onKeyUp.bind(this);
    self.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }

  onChange(e: SyntheticEvent<HTMLInputElement>) {
    this.setState({
      message: e.currentTarget.value,
    });
  }

  onKeyUp(e: Event) {
    if (!e.ctrlKey || e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    this.submit();
  }

  onSubmitButtonClick(e: Event) {
    e.preventDefault();
    this.submit();
  }

  submit() {
    const { message } = this.state;
    if (!message.length) {
      return;
    }

    this.props.sendMessage(message);
    this.setState({ message: '' });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="MessageForm">
        <TextField
          floatingLabelText="Message"
          multiLine={true}
          rowsMax={6}
          value={message}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
          fullWidth
        />

        <div className="MessageForm__Send">
          <FloatingActionButton
            className="MessageForm__SendButton"
            onClick={this.onSubmitButtonClick}
            disabled={!message.length}
            mini
          >
            <SendIcon />
          </FloatingActionButton>

          <div className="MessageForm__SendHint">
            Ctrl+Enter
          </div>
        </div>
      </div>
    );
  }
}
