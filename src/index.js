import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider as CartProvider} from './Store/CartContext';
import './index.css'
ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);

