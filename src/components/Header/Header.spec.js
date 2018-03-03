import React from 'react';
import { shallow } from 'enzyme';
import AppBar from 'material-ui/AppBar';
import Header from './Header';

test('should be an AppBar', () => {
  const header = shallow(<Header />);
  expect(header.type()).toEqual(AppBar);
});
