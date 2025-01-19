import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './Routes/AppRouter.tsx';
import { persistor, store } from './Store/index.ts';
import './input.css'

const App = () => {
  return (
    <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter basename="/">
                <AppRouter />
              </BrowserRouter>
          </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
