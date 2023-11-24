import React from 'react';
import Home from './components/Home';
import './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import PaymentPage from './components/PaymentPage';
import Cancel from './components/Cancel';
import Success from './components/Sucess';
import NotFound from './components/NotFound';



const App = () => {

  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
       <Route
        path='/payment/:index'
        element={<PaymentPage />}
      />
      <Route
        path='/cancel'
        element={<Cancel />}
      />
      <Route
        path='/success'
        element={<Success />}
      />
      <Route
        path='/*'
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
