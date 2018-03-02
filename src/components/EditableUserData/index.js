import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import model from '../../model';
import EditableUserData from './EditableUserData';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => bindActionCreators({
  onUserNameChange: model.user.actions.setUserName,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditableUserData);

