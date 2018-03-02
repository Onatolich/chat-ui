/**
 * Adds specified namspace to every action name in passed list
 */
export default function namespaceActions(namespace, names) {
  return names.reduce((acc, name) => {
    acc[name] = `${namespace}/${name}`;
    return acc;
  }, {});
}
