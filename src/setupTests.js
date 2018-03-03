/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-15';
import StorageShim from 'node-storage-shim';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

global.localStorage = new StorageShim();
