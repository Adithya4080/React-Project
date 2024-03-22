import React from 'react';
import '../../../src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../screens/home/Home';
import { FilterProvider } from '../Includes/FilterContext';
import ProductsSinglePage from '../screens/products/ProductsSinglePage';
import Login from '../screens/login/Login';
import SignUp from '../screens/login/SignUp';
import { Context } from '../context/Store';
import AuthRoute from './AuthRoute';
import NoMatch from '../screens/error/NoMatch';

function App() {

  return (
    <>
      <Context>
        <Router>
          <FilterProvider>
            <ToastContainer />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:id' 
                element={
                  <AuthRoute>
                    <ProductsSinglePage />
                  </AuthRoute>
                } 
              />
              <Route path='/auth/login' element={<Login />} />
              <Route path='/auth/create' element={<SignUp />} /> 
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </FilterProvider>
        </Router>
      </Context>      
    </>
  )
}

export default App