import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

let props;
let message;

beforeEach(() => {
  props = {
    avatar: 'avatar',
    username: 'username',
    message: 'message',
    isOwn: false,
  };
});

test('should not have Message--own modifier', () => {
  message = shallow(<Message {...props} />);
  expect(message.hasClass('Message--own')).toBeFalsy();
});

test('should have Message--own modifier if isOwn prop is true', () => {
  props.isOwn = true;
  message = shallow(<Message {...props} />);
  expect(message.hasClass('Message--own')).toBeTruthy();
});

test('should contain passed username', () => {
  message = shallow(<Message {...props} />);
  expect(message.contains(props.username)).toBeTruthy();
});

test('should contain passed message', () => {
  message = shallow(<Message {...props} />);
  expect(message.contains(props.message)).toBeTruthy();
});

test('should contain Avatar', () => {
  message = shallow(<Message {...props} />);
  expect(message.find('Avatar')).toHaveLength(1);
});

test('Avatar should have src prop equal to passed avatar prop', () => {
  message = shallow(<Message {...props} />);
  expect(message.find('Avatar').prop('src')).toEqual(props.avatar);
});
