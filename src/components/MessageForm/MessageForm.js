import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';

import './MessageForm.scss';

export default class MessageForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }

  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onKeyUp(e) {
    if (!e.ctrlKey || e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    this.submit();
  }

  onSubmitButtonClick(e) {
    e.preventDefault();
    this.submit();
  }

  submit() {
    this.props.sendMessage(this.state.message);
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

MessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
