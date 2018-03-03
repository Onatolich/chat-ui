import actions from '../actions';
import reducer from '../index';

const state = ['message'];

test('should return initial state if no state passed', () => {
  expect(reducer(undefined, {})).toEqual([]);
});

test('should return passed state', () => {
  expect(reducer(state, {})).toEqual(state);
});

test('should add new message on PUSH_MESSAGE action', () => {
  const message = 'message';
  expect(reducer(state, actions.pushMessage(message))).toEqual([...state, message]);
});
