import React from 'react';
import { shallow } from 'enzyme';
import EditableUserData from './EditableUserData';

let props;

beforeEach(() => {
  props = {
    user: {
      name: 'name',
      avatar: 'avatar',
    },
    onUserNameChange: jest.fn(),
  };
});

test('should contain Avatar', () => {
  const editableUserData = shallow(<EditableUserData {...props} />);
  expect(editableUserData.find('Avatar')).toHaveLength(1);
});

test('Avatar should have src prop equal to passed user avatar', () => {
  const editableUserData = shallow(<EditableUserData {...props} />);
  expect(editableUserData.find('Avatar').prop('src')).toEqual(props.user.avatar);
});

test('should contain TextField', () => {
  const editableUserData = shallow(<EditableUserData {...props} />);
  expect(editableUserData.find('TextField')).toHaveLength(1);
});

test('TextField should have value equal to passed user name', () => {
  const editableUserData = shallow(<EditableUserData {...props} />);
  expect(editableUserData.find('TextField').prop('value')).toEqual(props.user.name);
});

test('should perform onUserNameChange prop with new value on TextField change', () => {
  const value = 'value';
  const editableUserData = shallow(<EditableUserData {...props} />);
  editableUserData.find('TextField').simulate('change', {
    currentTarget: { value },
  });

  expect(props.onUserNameChange).toHaveBeenCalledWith(value);
});
