import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components';
import { SelectedCurrencyProvider } from './context/SelectedCurrencyContext';

ReactDOM.render(
  <React.StrictMode>
    <SelectedCurrencyProvider>
        <App />
    </SelectedCurrencyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


