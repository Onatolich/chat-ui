import React from 'react';
import { shallow } from 'enzyme';
import CreateMessageArea from './CreateMessageArea';

let props;

beforeEach(() => {
  props = {
    user: {
      name: 'name',
    },
  };
});

test('should contain connected EditableUserData', () => {
  const createMessageArea = shallow(<CreateMessageArea {...props} />);
  expect(createMessageArea.find('Connect(EditableUserData)')).toHaveLength(1);
});

test('should contain connected MessageForm', () => {
  const createMessageArea = shallow(<CreateMessageArea {...props} />);
  expect(createMessageArea.find('Connect(MessageForm)')).toHaveLength(1);
});

test('should not contain connected MessageForm if there is no user name', () => {
  props.user.name = '';
  const createMessageArea = shallow(<CreateMessageArea {...props} />);
  expect(createMessageArea.find('Connect(MessageForm)')).toHaveLength(0);
});
