/* @flow */

type NamespacedActionsT = {
  [string]: string,
};

/**
 * Adds specified namspace to every action name in passed list
 */
export default function namespaceActions(
  namespace: string,
  names: Array<string>
): NamespacedActionsT {
  return names.reduce((acc, name) => {
    acc[name] = `${namespace}/${name}`;
    return acc;
  }, {});
}
