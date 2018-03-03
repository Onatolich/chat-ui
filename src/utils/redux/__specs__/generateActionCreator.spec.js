import generateActionCreator from '../generateActionCreator';

const payload = 'payload';
const type = 'actionType';

let actionCreator;
beforeEach(() => {
  actionCreator = generateActionCreator(type);
});

test('should return a function', () => {
  expect(actionCreator).toBeInstanceOf(Function);
});

test('returned function should return correct action', () => {
  expect(actionCreator(payload)).toEqual({ type, payload });
});
