// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import CreateParentProfile from './pages/CreateParentProfile/CreateParentProfile'
import CreateParentProfileSetup from './pages/CreateParentProfileSetup/CreateParentProfileSetup'
import CreateKidProfile from './pages/CreateKidProfile/CreateKidProfile'
import CreateKidProfileSetup from './pages/CreateKidProfileSetup/CreateKidProfileSetup'
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
import * as profileService from './services/profileService'
import * as taskService from './services/taskService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState('')
  const [hideNavBar, setHideNavBar] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchProfile = async () => {
    const profile = await profileService.showProfile(user.profile)
    setProfile(profile)
    }
    if (user) fetchProfile()
  }, [user])


  const handleAddChild = async (profileId, childData) => {
    try {
      await profileService.createChild(childData, profileId)
    } catch (error) {
      console.log(error)
    }
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
          path="/createParentProfile"
          element={
            //<ProtectedRoute user={user}>
              <CreateParentProfile />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/createParentProfile/setup"
          element={
            //<ProtectedRoute user={user}>
              <CreateParentProfileSetup />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/createKidProfile"
          element={
            //<ProtectedRoute user={user}>
              <CreateKidProfile />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/createKidProfile/setup"
          element={
            //<ProtectedRoute user={user}>
              <CreateKidProfileSetup />
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
              <Profiles profile={profile} handleAddChild={handleAddChild}/>
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
          <NavBar user={user} handleLogout={handleLogout} hideNavBar={hideNavBar} setHideNavBar={setHideNavBar} />
    </div>
  )
}

export default App
