import React from 'react';
import { shallow } from 'enzyme';
import NoConnection from './NoConnection';

let props;

beforeEach(() => {
  props = {
    socket: {
      connected: true,
    },
  };
});

test('should be a null if socket is connected', () => {
  const noConnection = shallow(<NoConnection {...props} />);
  expect(noConnection.type()).toBeNull();
});

test('should render NoConnection if socket is disconnected', () => {
  props.socket.connected = false;
  const noConnection = shallow(<NoConnection {...props} />);
  expect(noConnection.find('.NoConnection')).toHaveLength(1);
});
