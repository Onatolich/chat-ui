import actions, { actionTypes } from './actions';

const {
  PUSH_MESSAGE,
} = actionTypes;

export default function messagesReducer(state = [], action) {
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
