import { all, fork } from 'redux-saga/effects';
import remote from './remote/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  yield all([
    remote,
    user,
  ].map(saga => fork(saga)));
}
