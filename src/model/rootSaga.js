import { all, fork } from 'redux-saga/effects';
import user from './user/sagas';
import remote from './remote/sagas';

export default function* rootSaga() {
  yield all([
    user,
    remote,
  ].map(saga => fork(saga)));
}
