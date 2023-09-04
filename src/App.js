import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import RequireAuth from './components/RequireAuth'
import Test from './pages/Test'
import Unauthorized from './pages/Unauthorized'
import Home from './pages/Home'
import Initialize from './pages/Initialize'
 
  
function App() {

  // Use the Require auth component props to stablish auth security
  const AdminDashboard = RequireAuth(Dashboard)
  const AdminTest = RequireAuth(Test)

  return (
      <Routes>
        {/* ROUTES FOR USER LEVEL AUTHORIZATION */}
          <Route exact path="/login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/home"  element={<Home />} />

        {/* ROUTES FOR ADMIN LEVEL AUTHORIZATION */}
          <Route path='/admin'>
            <Route path="/admin/dashboard"  element={<AdminDashboard/>} />
            <Route path="/admin/test"  element={<AdminTest/>} />
          </Route>

        {/* ROTES FOR ERROR HANDLING */}
          <Route path="/unauthorized"  element={<Unauthorized />} />
          <Route path="/initialize"  element={<Initialize />} />
          
      </Routes>
  );
}
  
export default App;