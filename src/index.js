/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory,useRouterHistory } from 'react-router';
import { stringify, parse } from 'qs';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './router';


const createAppHistory = useRouterHistory(createBrowserHistory);

//parse Params Router
const stringifyQuery = query => stringify(query, { arrayFormat: 'brackets', encode: false});
const appHistory = createAppHistory({
  parseQueryString: parse,
  stringifyQuery
});

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}  />
  </Provider>,
  document.getElementById('wrap')
);
