import utils from '../../utils';

const actionNames = [
  'CONNECTED',
  'SEND_MESSAGE',
  'DISCONNECTED',
];

const { actions, actionTypes } = utils.redux.actionsPreprocessor('remote', actionNames);

export default actions;
export { actionTypes };
