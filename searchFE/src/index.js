import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Client, Provider, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from "@urql/exchange-graphcache"

const cache = cacheExchange({})

const client=  new Client({
  url: `http://localhost:5000`,
  exchanges: [dedupExchange, cache, fetchExchange]
});// end client

ReactDOM.render(
  <React.StrictMode>
    <Provider value= {client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
