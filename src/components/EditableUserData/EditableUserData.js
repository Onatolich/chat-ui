/* @flow */
import React from 'react';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import './EditableUserData.scss';

type Props = {
  user: UserT,
  onUserNameChange: (name: string) => void,
};

export default class EditableUserData extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    (this: any).onUserNameChange = this.onUserNameChange.bind(this);
  }

  onUserNameChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.onUserNameChange(e.currentTarget.value);
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
          className="EditableUserData__UserName"
          onChange={this.onUserNameChange}
          value={user.name}
          fullWidth
        />
      </div>
    );
  }
}
