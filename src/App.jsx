import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Track from './pages/track'
import InternManagement from './pages/InternManagement'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/track" element={<Track />} />
        <Route path="/intern-list" element={<InternManagement />} />
      </Routes>
    </Router>
  )
}

export default App
