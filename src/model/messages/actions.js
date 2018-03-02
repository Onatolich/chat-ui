import utils from '../../utils';

const actionNames = [
  'PUSH_MESSAGE',
];

const { actions, actionTypes } = utils.redux.actionsPreprocessor('messages', actionNames);

export default actions;
export { actionTypes };
