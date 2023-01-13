import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppProvider } from '@shopify/polaris';

import configureStore from '@/redux/configureStore';

import App from './App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
