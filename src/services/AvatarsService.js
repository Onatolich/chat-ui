/* @flow */
const AVATARS_ROOT = 'https://spotim-demo-chat-server.herokuapp.com/avatars/';

const avatars = [
  '001-snorlax.png',
  '002-psyduck.png',
  '003-pikachu.png',
  '004-jigglypuff.png',
  '005-bullbasaur.png',
].map(avatar => `${AVATARS_ROOT}${avatar}`);

export default {
  getAll(): Array<string> {
    return avatars;
  },

  getRandom(): string {
    return avatars[Math.floor(Math.random() * avatars.length)];
  },
};
