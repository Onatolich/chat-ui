import StorageService from '../StorageService';

describe('get method', () => {
  const items = {
    string: 'string-value',
    array: ['v1', 'v2'],
    number: 19.5,
    null: null,
  };

  beforeEach(() => {
    Object.keys(items).forEach((key) => {
      StorageService.set(key, items[key]);
    });
  });

  test('should correctly restore different value types', () => {
    Object.keys(items).forEach((key) => {
      expect(StorageService.get(key)).toEqual(items[key]);
    });
  });
});

describe('set method', () => {
  test('should set passed value with specified key', () => {
    const key = 'test-key';
    const value = 'value';
    StorageService.set(key, value);
    expect(StorageService.get(key)).toEqual(value);
  });

  test('should remove key from storage if passed value is undefined', () => {
    const key = 'test-key';
    const value = 'value';
    StorageService.set(key, value);
    StorageService.set(key, undefined);
    expect(StorageService.get(key)).toBeUndefined();
  });
});

describe('remove method', () => {
  test('should remove passed key from storage', () => {
    const key = 'test-key';
    StorageService.remove(key);
    expect(StorageService.get(key)).toBeUndefined();
  });
});

describe('clear method', () => {
  test('should remove all stored data', () => {
    StorageService.set('key1', 'value1');
    StorageService.set('key2', 'value2');

    StorageService.clear();
    expect(Object.keys(global.localStorage)).toHaveLength(0);
  });
});
