import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ProtectedRoute from './Auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Participants from './pages/Participants';
import Healthmetrics from './pages/Healthmetrics';
import Home from './pages/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
    <Routes>
      <Route path ="/"  element={<Home />}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/health-metrics" element={<Healthmetrics />} />
      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
