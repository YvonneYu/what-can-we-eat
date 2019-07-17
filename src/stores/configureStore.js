import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

let configureStore = ( preLoadedState ) => {
  return createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
};

export default configureStore;