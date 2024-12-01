import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import addFlat from './Dashboard/addFlat';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/addFlat" element={<addFlat />} />
      </Routes>
    </Router>
  )
}

export default App