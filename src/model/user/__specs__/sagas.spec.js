import SagaTester from 'redux-saga-tester';
import StorageService from '../../../services/StorageService';
import actions, { actionTypes } from '../actions';
import sagas from '../sagas';

const USER_AVATAR_STORAGE_KEY = 'userAvatar';
const USER_NAME_STORAGE_KEY = 'userName';

let sagaTester;
beforeEach(() => {
  sagaTester = new SagaTester({});
});

afterEach(() => {
  StorageService.clear();
});

test('should restore user name from storage', async () => {
  const name = 'name';
  StorageService.set(USER_NAME_STORAGE_KEY, name);
  sagaTester.start(sagas);

  await sagaTester.waitFor(actionTypes.RESET);
  const action = sagaTester.getLatestCalledAction();
  expect(action.payload.name).toEqual(name);
});

test('should restore user avatar from storage', async () => {
  const avatar = 'avatar';
  StorageService.set(USER_AVATAR_STORAGE_KEY, avatar);
  sagaTester.start(sagas);

  await sagaTester.waitFor(actionTypes.RESET);
  const action = sagaTester.getLatestCalledAction();
  expect(action.payload.avatar).toEqual(avatar);
});

test('should generate new avatar if there was no one stored before', async () => {
  sagaTester.start(sagas);

  await sagaTester.waitFor(actionTypes.RESET);
  const action = sagaTester.getLatestCalledAction();
  expect(!!action.payload.avatar.length).toBeTruthy();
});

test('should set to storage new avatar if there was no one stored before', async () => {
  sagaTester.start(sagas);

  await sagaTester.waitFor(actionTypes.RESET);
  const action = sagaTester.getLatestCalledAction();
  expect(StorageService.get(USER_AVATAR_STORAGE_KEY)).toEqual(action.payload.avatar);
});

describe('SET_USER_NAME action', () => {
  test('should set passed name to storage', () => {
    sagaTester.start(sagas);
    const name = 'name';
    sagaTester.dispatch(actions.setUserName(name));

    expect(StorageService.get(USER_NAME_STORAGE_KEY)).toEqual(name);
  });
});
