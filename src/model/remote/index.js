import actions, { actionTypes } from './actions';

const {
  CONNECTED,
  DISCONNECTED,
} = actionTypes;

const initialState = {
  connected: false,
};

export default function remote(state = initialState, action) {
  switch (action.type) {
    case CONNECTED:
      return {
        ...state,
        connected: true,
      };

    case DISCONNECTED:
      return {
        ...state,
        connected: false,
      };

    default:
      return state;
  }
};

remote.actions = actions;
