import underscoreToCamelCase from '../underscoreToCamelCase';

test('should transform underscore-separated string to camelCase-separated', () => {
  expect(underscoreToCamelCase('test_string')).toEqual('testString');
});
