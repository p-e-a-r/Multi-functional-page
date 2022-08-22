import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CartState from './Context/CartState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);


