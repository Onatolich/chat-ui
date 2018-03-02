import {
  combineReducers,
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import model from './index';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(combineReducers(model), enhancer);

sagaMiddleware.run(rootSaga);

export default store;
