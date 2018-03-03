/* @flow */
import actions, { actionTypes } from './actions';

type State = Array<MessageT>;

const {
  PUSH_MESSAGE,
} = actionTypes;

export default function messagesReducer(state: State = [], action: ActionT): State {
  switch (action.type) {
    case PUSH_MESSAGE:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
}

messagesReducer.actions = actions;
messagesReducer.actionTypes = actionTypes;
