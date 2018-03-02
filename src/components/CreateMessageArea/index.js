import { connect } from 'react-redux';
import CreateMessageArea from './CreateMessageArea';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(CreateMessageArea);

