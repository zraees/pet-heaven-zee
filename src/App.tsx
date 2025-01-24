import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './Routes/AppRouter.tsx';
import { persistor, store } from './Store/index.ts';
import './input.css';
import Navbar from './Components/Navbar/DesktopNavbar.tsx';
import Footer from './Components/Footer.tsx';

const App = () => {
  return (
    <div className="bg-white-1">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/">
            <Navbar />
            <AppRouter />
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
