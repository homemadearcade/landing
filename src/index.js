import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

let gameServerUrl = 'http://ha-game.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  gameServerUrl = 'http://localhost:4000'
}
window.HAGameServerUrl = gameServerUrl

let gameClientUrl = 'http://ha-game.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  gameClientUrl = 'http://localhost:8080'
}
window.HAGameClientUrl = gameClientUrl

let socialClientUrl = 'http://ha-social.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  socialClientUrl = 'http://localhost:3005'
}
window.HASocialClientUrl = socialClientUrl

let socialServerUrl = 'http://ha-social.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  socialServerUrl = 'http://localhost:5000'
}
window.HASocialServerUrl = socialServerUrl

let landingUrl = 'http://ha-landing.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  landingUrl = 'http://localhost:3000'
}
window.HALandingUrl = landingUrl



const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
