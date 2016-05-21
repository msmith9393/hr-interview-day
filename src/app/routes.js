import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ColorContainer from './containers/ColorContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ColorContainer} />
  </Route>
);
