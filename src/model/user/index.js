import actions, { actionTypes } from './actions';

const {
  SET_USER_NAME,
  RESET,
} = actionTypes;

const initialState = {
  avatar: '',
  name: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return {
        ...action.payload,
      };

    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

userReducer.actions = actions;
