/* @flow */
import actions, { actionTypes } from './actions';

type State = {
  connected: boolean,
};

const {
  CONNECTED,
  DISCONNECTED,
} = actionTypes;

const initialState = {
  connected: false,
};

export default function remote(state: State = initialState, action: ActionT): State {
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
}

remote.actions = actions;
