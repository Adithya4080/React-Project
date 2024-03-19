import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/screens/home/Home';
import { FilterProvider } from './components/Includes/FilterContext';

function App() {

  return (
    <>
      <Router>
        <FilterProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </FilterProvider>
      </Router>      
    </>
  )
}

export default App
