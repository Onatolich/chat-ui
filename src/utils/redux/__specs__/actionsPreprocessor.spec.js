import underscoreToCamelCase from '../../string/underscoreToCamelCase';
import actionsPreprocessor from '../actionsPreprocessor';

const namespace = 'namespace';
const actionNames = [
  'ACTION_TYPE_1',
  'ACTION_TYPE_2',
];

let result;
beforeEach(() => {
  result = actionsPreprocessor(namespace, actionNames);
});

test('result object should contain actions', () => {
  expect(result.actions).toBeTruthy();
});

test('result object should contain actionTypes', () => {
  expect(result.actionTypes).toBeTruthy();
});

describe('actions', () => {
  test('should have camel-cased keys', () => {
    const keys = Object.keys(result.actions);
    actionNames.forEach((name) => {
      expect(keys.includes(underscoreToCamelCase(name))).toBeTruthy();
    });
  });

  test('each value should be an action creator', () => {
    const payload = 'payload';
    Object.values(result.actions).forEach((action, index) => {
      expect(action(payload)).toEqual({
        payload,
        type: result.actionTypes[actionNames[index]],
      });
    });
  });
});

describe('actionTypes', () => {
  test('should contain an entry for every action name', () => {
    const keys = Object.keys(result.actionTypes);
    actionNames.forEach((name) => {
      expect(keys.includes(name)).toBeTruthy();
    });
  });

  test('each value should be a namespaced action type', () => {
    Object.keys(result.actionTypes).forEach((key) => {
      expect(result.actionTypes[key]).toEqual(`${namespace}/${key}`);
    });
  });
});
