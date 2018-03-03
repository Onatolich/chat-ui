import { all, fork } from 'redux-saga/effects';
import socket from './socket/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  yield all([
    socket,
    user,
  ].map(saga => fork(saga)));
}
