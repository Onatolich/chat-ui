import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

import './EditableUserData.scss';

export default class EditableUserData extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onUserNameChange = this.onUserNameChange.bind(this);
  }

  onUserNameChange(e) {
    this.props.onUserNameChange(e.target.value);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="EditableUserData">
        <Avatar
          className="EditableUserData__Avatar"
          src={user.avatar}
        />

        <TextField
          hintText="What is your name?"
          onChange={this.onUserNameChange}
          value={user.name}
          fullWidth
        />
      </div>
    );
  }
}

EditableUserData.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
  onUserNameChange: PropTypes.func.isRequired,
};
