import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from './Router';

const Main = () => (
  // #4
  <BrowserRouter>
      <Router />
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <div id="root"></div>
    <div id="modal"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
