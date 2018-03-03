import actions from '../actions';
import reducer from '../index';

const state = {
  connected: 'connectedState',
};

test('should return initial state if no state passed', () => {
  expect(reducer(undefined, {})).toEqual({
    connected: false,
  });
});

test('should return passed state', () => {
  expect(reducer(state, {})).toEqual(state);
});

test('should set connected state to true on CONNECTED action', () => {
  expect(reducer(state, actions.connected())).toEqual({ connected: true });
});

test('should set connected state to false on DISCONNECTED action', () => {
  expect(reducer(state, actions.disconnected())).toEqual({ connected: false });
});
