// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Onboarding from './pages/Onboarding/Onboarding'
import Chores from './pages/Chores/Chores'
import TaskList from './pages/TaskList/TaskList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Landing user={user} Onboarding={Onboarding}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/createProfile"
          element={
            //<ProtectedRoute user={user}>
              <CreateProfile />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            //<ProtectedRoute user={user}>
              <Dashboard />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/tasklist"
          element={
            //<ProtectedRoute user={user}>
              <TaskList />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            //<ProtectedRoute user={user}>
              <Profiles />
            //</ProtectedRoute>
          }
        />
        <Route 
          path="/chores"
          element= {
            <Chores />
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
          <NavBar user={user} handleLogout={handleLogout} />
    </div>
  )
}

export default App
