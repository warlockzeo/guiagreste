import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

import RouteGuard from './pages/RouteGuard/RoutGuard';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import UserView from './pages/UserView/UserView';
import Profile from './pages/Profile/Profile';
import EnterpriseView from './pages/EnterpriseView/EnterpriseView';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteGuard element={<RootLayout />} />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/enterprise/:enterpriseId', element: <EnterpriseView /> },
      {
        path: '/user/:userId',
        element: <RouteGuard element={<UserView />} />,
      },
      { path: '/profile', element: <RouteGuard element={<Profile />} /> },
    ],
  },
  { path: '/403', element: <Unauthorized /> },
  { path: '/login', element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
