import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import history from './utils/history';
import './index.css';
import App from './containers/App';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
