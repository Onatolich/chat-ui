import actions from '../actions';
import reducer from '../index';

const state = {
  avatar: 'avatar',
  name: 'name',
};

test('should return initial state if no state passed', () => {
  expect(reducer(undefined, {})).toEqual({
    avatar: '',
    name: '',
  });
});

test('should return passed state', () => {
  expect(reducer(state, {})).toEqual(state);
});

test('should reset state with passed payload on RESET action', () => {
  const nextState = {
    avatar: 'next-avatar',
    name: 'next-name',
  };
  expect(reducer(state, actions.reset(nextState))).toEqual({ ...nextState });
});

test('should update user name on SET_USER_NAME action', () => {
  const name = 'next-name';
  expect(reducer(state, actions.setUserName(name))).toEqual({...state, name});
});
