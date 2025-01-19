import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/index.tsx'
import Contact from '../Pages/Contact/index.tsx'
import PetDetails from '../Pages/PetDetails/index.tsx'
import { Navigation } from '../Utils/constants/index.tsx';
import React from 'react';

const AppRouter = () => (
  <Routes>
    <Route
        path={Navigation.HOME}
        element={
            <Home />
        }
    />
    <Route
        path={Navigation.CONTACT}
        element={
            <Contact />
        }
    />
    <Route
        path={Navigation.PetDetails}
        element={
            <PetDetails />
        }
    />
  </Routes>
);
export default AppRouter;
