import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App';



render(
  <Provider store = {createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

