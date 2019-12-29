/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

const initialReducers = {
  router: connectRouter(history),
};

const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    ...initialReducers,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
