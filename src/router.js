import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/home/homePage';
import Login from './components/login/login';
import  App from './components/App';
import  GetToken from './components/login/getToken';
export default (
  <Route path="/" component={App}>
    <IndexRoute component = { HomePage } />
    <Route path="login" component = { Login } />
    <Route path="product" component = { HomePage } />
    <Route path="getToken" component = { GetToken } />
  </Route>
);





