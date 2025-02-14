import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/index.tsx';
import Contact from '../Pages/Contact/index.tsx';
import PetDetails from '../Pages/PetDetails/index.tsx';
import { Navigation } from '../Utils/constants/index.tsx';
import React from 'react';
import PetCare from '../Pages/PetCare/index.tsx';
import About from '../Pages/About/index.tsx';

const AppRouter = () => (
  <Routes>
    <Route path={Navigation.HOME} element={<Home />} />
    <Route path={Navigation.CONTACT} element={<Contact />} />
    <Route path={Navigation.PetDetails} element={<PetDetails />} />
    <Route path={Navigation.PetCare} element={<PetCare />} />
    <Route path={Navigation.ABOUT} element={<About />} />
  </Routes>
);
export default AppRouter;
