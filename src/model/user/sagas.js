import { put, call, takeEvery } from 'redux-saga/effects';
import actions, { actionTypes } from './actions';
import AvatarsService from '../../services/AvatarsService';
import StorageService from '../../services/StorageService';

const USER_AVATAR_STORAGE_KEY = 'userAvatar';
const USER_NAME_STORAGE_KEY = 'userName';

function setUserName({ payload }) {
  StorageService.set(USER_NAME_STORAGE_KEY, payload);
}

function restoreName() {
  return StorageService.get(USER_NAME_STORAGE_KEY) || '';
}

function restoreAvatar() {
  let avatar = StorageService.get(USER_AVATAR_STORAGE_KEY);
  if (!avatar) {
    avatar = AvatarsService.getRandom();
    StorageService.set(USER_AVATAR_STORAGE_KEY, avatar);
  }

  return avatar;
}

function* restoreUserData() {
  yield put(actions.reset({
    avatar: restoreAvatar(),
    name: restoreName(),
  }));
}

export default function* userSagas() {
  yield call(restoreUserData);
  yield takeEvery(actionTypes.SET_USER_NAME, setUserName);
}
