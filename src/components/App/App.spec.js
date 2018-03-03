import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

let app;

beforeEach(() => {
  app = shallow(<App />);
});

test('should contain Header', () => {
  expect(app.find('Header')).toHaveLength(1);
});

test('should contain connected MessagesList', () => {
  expect(app.find('Connect(MessagesList)')).toHaveLength(1);
});

test('should contain connected CreateMessageArea', () => {
  expect(app.find('Connect(CreateMessageArea)')).toHaveLength(1);
});

test('should contain connected NoConnection', () => {
  expect(app.find('Connect(NoConnection)')).toHaveLength(1);
});
