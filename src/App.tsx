import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { MuiThemeProvider } from './theme';
import { Home } from './pages/Home';
import { store, persistor } from './redux/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);
