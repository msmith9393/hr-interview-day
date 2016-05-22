import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import routes from './app/routes';
import reducers from './app/reducers';

function configureStore(initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(ReduxPromise, reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('root'));
