import SagaTester from 'redux-saga-tester';
import SocketMock from 'socket-io-mock';
import config from '../../../config';
import * as SocketService from '../../../services/SocketService';
import actions, { actionTypes } from '../actions';
import messages from '../../messages';
import sagas from '../sagas';

const SocketServiceBuffer = SocketService.default;
let state;
let sagaTester;
let socket;

beforeEach(async () => {
  socket = new SocketMock();
  SocketService.default = socket.socketClient;

  state = {
    user: {
      avatar: 'user-avatar',
      name: 'user-name',
    },
  };
  sagaTester = new SagaTester({ initialState: state });
  sagaTester.start(sagas);

  await sagaTester.waitFor(actionTypes.INITIALIZED);
});

afterAll(() => {
  SocketService.default = SocketServiceBuffer;
});

test('should perform CONNECTED action on socket connect', async () => {
  socket.emit('connect');
  await sagaTester.waitFor(actionTypes.CONNECTED);

  const action = sagaTester.getLatestCalledAction();
  expect(action).toEqual(actions.connected());
});

test('should perform DISCONNECTED action on socket disconnect', async () => {
  socket.emit('disconnect');
  await sagaTester.waitFor(actionTypes.DISCONNECTED);

  const action = sagaTester.getLatestCalledAction();
  expect(action).toEqual(actions.disconnected());
});

test('should perform PUSH_MESSAGE action of messages on chat event', async () => {
  const message = { message: 'message' };
  socket.emit(config.IO_CHAT_EVENT, message);
  await sagaTester.waitFor(messages.actionTypes.PUSH_MESSAGE);

  const action = sagaTester.getLatestCalledAction();
  expect(action).toEqual(messages.actions.pushMessage(message));
});

describe('SEND_MESSAGE action', () => {
  test('should emit socket chat event with new message', () => {
    socket.socketClient.emit = jest.fn();

    const message = 'message';
    const { user } = state;
    sagaTester.dispatch(actions.sendMessage(message));

    expect(socket.socketClient.emit).toHaveBeenCalledWith(config.IO_CHAT_EVENT, {
      message,
      avatar: user.avatar,
      username: user.name,
    });
  });
});
