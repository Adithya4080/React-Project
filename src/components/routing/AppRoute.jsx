import React from 'react';
import '../../../src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../screens/home/Home';
import { FilterProvider } from '../Includes/FilterContext';
import ProductsSinglePage from '../screens/products/ProductsSinglePage';
import Login from '../screens/login/Login';
import SignUp from '../screens/login/SignUp';

function App() {

  return (
    <>
      <Router>
        <FilterProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductsSinglePage />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/create' element={<SignUp />} /> 
          </Routes>
        </FilterProvider>
      </Router>      
    </>
  )
}

export default App