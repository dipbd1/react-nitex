import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Root from './app/index.js';
import store from './app/store';
import { toast } from 'react-toastify';

import * as serviceWorker from './serviceWorker';

toast.configure()

ReactDOM.render(
    <Provider store={ store }>
        <Root/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
