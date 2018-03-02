import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import model from '../../model';
import MessageForm from './MessageForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  sendMessage: model.remote.actions.sendMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

