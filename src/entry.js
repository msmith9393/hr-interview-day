import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import routes from './app/routes';
import reducers from './app/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('root'));
