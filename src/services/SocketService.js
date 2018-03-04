import io from 'socket.io-client';
import config from '../config';

export default io.connect(config.IO_ENDPOINT);
