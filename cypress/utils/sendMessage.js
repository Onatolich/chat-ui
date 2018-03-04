import io from 'socket.io-client';

const socket = io('https://spotim-demo-chat-server.herokuapp.com');

export default function sendMessage(avatar, username, message) {
  socket.emit('spotim/chat', { avatar, username, message });
}
