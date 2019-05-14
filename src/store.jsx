import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import counter from './reducer/counter';
import counter2 from './reducer/counter2';

export default createStore(
  combineReducers({ coun: counter, coun2: counter2 }),
  {},
  applyMiddleware(logger),
);
