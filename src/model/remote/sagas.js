import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { put, call, take } from 'redux-saga/effects';
import config from '../../config';
import actions from './actions';

const socket = io(config.IO_ENDPOINT);

function initSocket() {
  return eventChannel((emitter) => {
    socket.on('connect', () => {
      emitter(actions.connected());
    });

    socket.on(config.IO_CHAT_EVENT, (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      emitter(actions.disconnected());
    });

    return () => {};
  });
}

export default function* remoteMiddleware() {
  const channel = yield call(initSocket);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
