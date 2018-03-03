/* @flow */
import { underscoreToCamelCase } from '../string';
import namespaceActions from './namespaceActions';
import generateActionCreator from './generateActionCreator';

type ProcessedActionsT = {
  actions: {
    [string]: ActionCreatorT,
  },
  actionTypes: {
    [string]: string,
  },
};

/**
 * Accepts namespace and action names list and returns object with 2 attrs:
 * actionTypes: list of namespaced action types
 * actions: action creators for each type
 */
export default function actionsPreprocessor(namespace: string, names: Array<string>): ProcessedActionsT {
  const actionTypes = namespaceActions(namespace, names);
  const actions = names.reduce((acc, name) => {
    acc[underscoreToCamelCase(name)] = generateActionCreator(actionTypes[name]);
    return acc;
  }, {});

  return { actions, actionTypes };
}
