import {React, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage'

import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

import NotFound from '../pages/NotFound'


export default function RootRoute() {
  const { isAuthenticated } = useState(true);

  return (
    <Routes>
      <Route 
        path="/login" 
        element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard"/>} 
      />
      <Route 
        path="/register" 
        element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard"/>} 
      />

      {/* Защищенный маршрут */}
      <Route
        path="/dashboard"
        // element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        element={<DashboardPage />}

      />
      
      {/* Маршрут для 404 */}
      <Route path="*" element={<NotFound />} />
  </Routes>
  );
}

