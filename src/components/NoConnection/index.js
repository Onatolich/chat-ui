import { connect } from 'react-redux';
import NoConnection from './NoConnection';

const mapStateToProps = ({ socket }) => ({ socket });

export default connect(mapStateToProps)(NoConnection);
