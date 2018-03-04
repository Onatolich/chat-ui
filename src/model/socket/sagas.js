import { eventChannel } from 'redux-saga';
import {
  put,
  call,
  take,
  takeEvery,
  select,
} from 'redux-saga/effects';
import config from '../../config';
import SocketService from '../../services/SocketService';
import actions, { actionTypes } from './actions';
import messagesActions from '../messages/actions';

function createSocketChannel() {
  return eventChannel((emitter) => {
    SocketService.on('connect', () => {
      emitter(actions.connected());
    });

    SocketService.on(config.IO_CHAT_EVENT, (payload) => {
      if (!payload || !payload.message) {
        return;
      }

      emitter(messagesActions.pushMessage(payload));
    });

    SocketService.on('disconnect', () => {
      emitter(actions.disconnected());
    });

    return () => {};
  });
}

function* sendMessage({ payload }) {
  const user = yield select(state => state.user);

  SocketService.emit(config.IO_CHAT_EVENT, {
    avatar: user.avatar,
    username: user.name,
    message: payload,
  });
}

export default function* socketSagas() {
  const channel = yield call(createSocketChannel);
  yield put(actions.initialized());

  yield takeEvery(actionTypes.SEND_MESSAGE, sendMessage);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
