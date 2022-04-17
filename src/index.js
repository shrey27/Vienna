import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, AuthenticationProvider } from './frontend/context';
import { store } from './frontend/store/index';
import { Provider } from 'react-redux';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthenticationProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AuthenticationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
