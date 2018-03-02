import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { put, call, take } from 'redux-saga/effects';
import actions from './actions';

function initSocket() {
  return eventChannel((emitter) => {
    // TODO: make it configurable
    // const socket = io('https://spotim-demo-chat-server.herokuapp.com');
    const socket = io('http://localhost');

    socket.on('connect', () => {
      yield put(actions.connected());
    });

    socket.on('event', (data) => {
      console.log(data);
      // TODO
    });

    socket.on('disconnect', () => {
      yield put(actions.disconnected());
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
