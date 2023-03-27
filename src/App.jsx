// npm modules
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Landing from './pages/Landing/Landing'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import CreateParentProfile from './pages/CreateParentProfile/CreateParentProfile'
import CreateParentProfileSetup from './pages/CreateParentProfileSetup/CreateParentProfileSetup'
import CreateKidProfile from './pages/CreateKidProfile/CreateKidProfile'
import CreateKidProfileSetup from './pages/CreateKidProfileSetup/CreateKidProfileSetup'
import DuplicateProfilePrevention from './pages/DuplicateProfilePrevention/DuplicateProfilePrevention'
import KidChores from './pages/KidChores/KidChores'
import CoinGoal from './pages/CoinGoal/CoinGoal'
import Feed from './pages/Feed/Feed'
import Map from './pages/Map/Map'
import ParentProfile from './pages/ParentProfile/ParentProfile'
import ChoreBoard from './pages/ChoreBoard/ChoreBoard'

import Dashboard from './pages/Dashboard/Dashboard'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Onboarding from './pages/Onboarding/Onboarding'
import TaskList from './pages/TaskList/TaskList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// redux actions
import { setCurrentUser } from '../src/actions'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  const handleSignupOrLogin = () => {
    dispatch(setCurrentUser(profile, authService.getUser()))
  }

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch(setCurrentUser(profile, authService.getUser()))
      console.log('profileID:', authService.getUser())
    }
    fetchProfile()
  }, [])


  const handleAddChild = async (childData) => {
    try {
      await profileService.create(authService.getUser(), childData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='app'>
      <Routes>
        <Route
          path="/"
          element={authService.getUser() ? <ParentProfile /> : <Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
          path="/onboarding"
          element={<Landing user={authService.getUser()} Onboarding={Onboarding}
        />} />
        <Route
          path="/createparentprofile"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <CreateParentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createparentprofile/setup"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <CreateParentProfileSetup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createkidprofile"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <CreateKidProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createkidprofile/setup"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <CreateKidProfileSetup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coingoal"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <CoinGoal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <Feed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parentprofile"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <ParentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/choreboard/:id"
          element={
            <ProtectedRoute user={authService.getUser()}>
              <ChoreBoard />
            </ProtectedRoute>
          }
        />  
        <Route 
          path="/kidChores/:id"
          element= {
            <ProtectedRoute user={authService.getUser()}>
              <KidChores />
            </ProtectedRoute>
          }
        />


        {/* TODO: Routes not being used currently*/}

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
          path="/change-password"
          element={
            <ProtectedRoute user={profile.user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>


      <NavBar user={profile.user} />
    </div>
  )
}

export default App
