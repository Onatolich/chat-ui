import { connect } from 'react-redux';
import MessagesList from './MessagesList';

const mapStateToProps = ({ user, messages }) => ({ user, messages });

export default connect(mapStateToProps)(MessagesList);
