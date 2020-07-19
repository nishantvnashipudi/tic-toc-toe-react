import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/app/board';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

ReactDOM.render(
   <Routes history={history}>
    <Board />
    </Routes>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
