import uncapitalize from '../uncapitalize';

test('should return passed string with uncapitalized first letter', () => {
  expect(uncapitalize('Test')).toEqual('test');
});

test('should not lower case of other letters', () => {
  expect(uncapitalize('TEST')).toEqual('tEST');
});
