import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './views/signUp'
import LoggedUserScreen from './views/loggedUserScreen'
import LoggedAdminScreen from './views/loggedAdminScreen'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cadastro" component={SignUp} />
            <Route path="/usuario" component={LoggedUserScreen} />
            <Route path="/admin" component={LoggedAdminScreen} />
        </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
