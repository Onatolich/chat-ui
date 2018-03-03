/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';
import StorageShim from 'node-storage-shim';

process.env.IO_ENDPOINT = 'IO_ENDPOINT';
process.env.IO_CHAT_EVENT = 'IO_CHAT_EVENT';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

global.localStorage = new StorageShim();
