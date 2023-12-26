import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import React from 'react';

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Docs from './pages/Docs'
import Form from './pages/Form'
import Invite from './pages/Invite'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="docs" element={<Docs />} />
      <Route path="form" element={<Form />} />
      <Route path="invite" element={<Invite />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
