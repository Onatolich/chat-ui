import namespaceActions from '../namespaceActions';

test('should return namespaced actions map', () => {
  const namespace = 'namespace';
  const actions = ['ACTION1', 'ACTION2', 'ACTION3'];

  const expectedOutput = actions.reduce((acc, name) => {
    acc[name] = `${namespace}/${name}`;
    return acc;
  }, {});

  expect(namespaceActions(namespace, actions)).toEqual(expectedOutput);
});
