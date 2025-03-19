import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../modules/login/LoginPage';
import Dashboard from '../modules/home/Dashboard';
import PrivateRoute from './PrivateRoutes';
import Licenses from '../modules/licencias/Licenses';
import Users from '../modules/users/Users';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/licenses"
        element={
          <PrivateRoute>
            <Licenses />
          </PrivateRoute>
        }
      />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;