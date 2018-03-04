import React from 'react';
import { shallow } from 'enzyme';
import MessageForm from './MessageForm';

let props;
let messageForm;
let instance;

beforeEach(() => {
  props = {
    sendMessage: jest.fn(),
  };

  messageForm = shallow(<MessageForm {...props} />);
  instance = messageForm.instance();
});

test('should contain TextField', () => {
  expect(messageForm.find('TextField')).toHaveLength(1);
});

test('should contain send button', () => {
  expect(messageForm.find('FloatingActionButton')).toHaveLength(1);
});

test('should perform submit method on send button click', () => {
  instance.submit = jest.fn();
  messageForm.find('FloatingActionButton').simulate('click');
  expect(instance.submit).toHaveBeenCalled();
});

test('should perform submit method on ctrl+enter key press in the TextField', () => {
  instance.submit = jest.fn();
  messageForm.find('TextField').simulate('keyUp', {
    preventDefault: () => {},
    ctrlKey: true,
    key: 'Enter',
  });
  expect(instance.submit).toHaveBeenCalled();
});

test('should update message state on TextField change', () => {
  const value = 'value';
  instance.setState = jest.fn();
  messageForm.find('TextField').simulate('change', {
    currentTarget: { value },
  });
  expect(instance.setState).toHaveBeenCalledWith({ message: value });
});

describe('isAbleToSend method', () => {
  test('should return false for empty message', () => {
    instance.state.message = '';
    expect(instance.isAbleToSend()).toBeFalsy();
  });

  test('should return true for not empty message', () => {
    instance.state.message = 'test';
    expect(instance.isAbleToSend()).toBeTruthy();
  });
});

describe('submit method', () => {
  const message = 'message';

  beforeEach(() => {
    instance.state.message = message;
    instance.isAbleToSend = jest.fn().mockReturnValue(true);
    instance.setState = jest.fn();
  });

  test('should not perform sendMessage prop is isAbleToSend returns false', () => {
    instance.isAbleToSend.mockReturnValue(false);
    instance.submit();
    expect(props.sendMessage).not.toHaveBeenCalled();
  });

  test('should perform sendMessage prop with message state', () => {
    instance.submit();
    expect(props.sendMessage).toHaveBeenCalledWith(message);
  });

  test('should reset message state', () => {
    instance.submit();
    expect(instance.setState).toHaveBeenCalledWith({ message: '' });
  });
});
