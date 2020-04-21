import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createClient, Provider} from 'urql';


const client= createClient({
  url: `https://4000-c98dd7ad-accc-4ee6-8b01-2779ee5aa5db.ws-us02.gitpod.io/`
  //** add this code back for auth */
  // fetchOptions: () => {
  //   const token= getToken();
  //   return {
  //     headers: {authorization: token ? `Bearer ${token}` : ''}
  //   }
  // }
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
