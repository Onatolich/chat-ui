import utils from '../../utils';

const actionNames = [
  'CONNECTED',
  'SEND_MESSAGE',
  'DISCONNECTED',
];

const { actions, actionTypes } = utils.redux.actionsPreprocessor('socket', actionNames);

export default actions;
export { actionTypes };
