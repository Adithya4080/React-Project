import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/screens/home/Home';
import { FilterProvider } from './components/Includes/FilterContext';
import ProductsSinglePage from './components/screens/products/ProductsSinglePage';

function App() {

  return (
    <>
      <Router>
        <FilterProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductsSinglePage />} />
          </Routes>
        </FilterProvider>
      </Router>      
    </>
  )
}

export default App
