/**
 * Returns action creator for specified action type
 * which accepts single optional argument which will be exposed as payload attr of action
 */
export default function generateActionCreator(type) {
  return payload => ({ type, payload });
}
