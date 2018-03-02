import utils from '../../utils';

const actionNames = [
  'SET_USER_NAME',
];

const { actions, actionTypes } = utils.redux.actionsPreprocessor('user', actionNames);

export default actions;
export { actionTypes };
