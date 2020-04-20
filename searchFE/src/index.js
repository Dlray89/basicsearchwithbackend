import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createClient, Provider} from 'url';

const port= process.env.PORT;

const client= createClient({
  url: `http://localhost:${port}/graphql`,
  fetchOptions: () => {
    const token= getToken();
    return {
      headers: {authorization: token ? `Bearer ${token}` : ''}
    }//end return
  }//end fetchOptions
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
