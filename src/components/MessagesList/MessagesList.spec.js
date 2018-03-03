import React from 'react';
import { shallow } from 'enzyme';
import MessagesList from './MessagesList';

const user = {
  username: 'username',
  avatar: 'avatar',
};
let props;

beforeEach(() => {
  props = {
    user: {
      name: user.username,
      avatar: user.avatar,
    },
    messages: [
      {
        ...user,
        message: 'message 1',
      },
      {
        username: 'other user',
        avatar: 'avatar',
        message: 'message 2',
      },
      {
        username: 'username',
        avatar: 'other avatar',
        message: 'message 3',
      },
    ],
  };
});

test('should render no messages message if there is no messages', () => {
  props.messages = [];
  const messagesList = shallow(<MessagesList {...props} />);
  expect(messagesList.find('.MessagesList__NoMessages')).toHaveLength(1);
});

test('should render all messages', () => {
  const messagesList = shallow(<MessagesList {...props} />);
  const instance = messagesList.instance();

  props.messages.forEach((message, index) => {
    expect(messagesList.find('Message').at(index).props()).toEqual({
      ...message,
      isOwn: instance.isOwnMessage(message),
    });
  });
});

describe('componentDidUpdate method', () => {
  let messagesList;
  let instance;

  beforeEach(() => {
    messagesList = shallow(<MessagesList {...props} />);
    instance = messagesList.instance();
    instance.scrollToEnd = jest.fn();
  });

  test('should not perform scrollToEnd method if nothing changed', () => {
    instance.componentDidUpdate(props);
    expect(instance.scrollToEnd).not.toHaveBeenCalled();
  });

  test('should perform scrollToEnd method if amount of messages changed', () => {
    instance.componentDidUpdate({
      ...props,
      messages: [...props.messages, {}],
    });
    expect(instance.scrollToEnd).toHaveBeenCalled();
  });
});

describe('scrollToEnd method', () => {
  test('should set scrollTop attr of root equal to clientHeight attr of content', () => {
    const messagesList = shallow(<MessagesList {...props} />);
    const instance = messagesList.instance();
    instance.root = {};
    instance.content = {
      clientHeight: 'clientHeight',
    };

    instance.scrollToEnd();

    expect(instance.root.scrollTop).toEqual(instance.content.clientHeight);
  });
});
