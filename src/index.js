import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// setting default global configuration using Axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// we can also set default headers using Axios
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// adding Axios Interceptors for the request to execute code globally
axios.interceptors.request.use(request => {
  console.log('[Axios Interceptor] Request = ' + request);
    // you can edit request config if you need to
    return request; // need to always return the request, otherwise the request will be blocked

  // you can also hanle errors for the request
  }, error => {
    console.log('[Axios Interceptor - Request] Error message = ' + error);
    return Promise.reject(error); // also need to return the error
});


// this time the Interceptor is for the respose
axios.interceptors.response.use(response => {
  console.log('[Axios Interceptor] Response = ' + response);
    // you can edit response config if you need to
    return response;
}, error => {
    console.log('[Axios Interceptor - Response] Error message = ' + error);
    return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
