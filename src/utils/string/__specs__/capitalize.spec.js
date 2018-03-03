import capitalize from '../capitalize';

test('should return passed string with capitalized first letter', () => {
  expect(capitalize('test')).toEqual('Test');
});

test('should not lower case of other letters', () => {
  expect(capitalize('tEST')).toEqual('TEST');
});
