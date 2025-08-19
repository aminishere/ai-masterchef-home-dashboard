import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Track from './pages/track'
import InternManagement from './pages/InternManagement'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/track" element={<Track />} />
        <Route path="/intern-list" element={<InternManagement />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </Router>
  )
}

export default App
