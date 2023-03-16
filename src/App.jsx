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
import KidChores from './pages/KidChores/KidChores'
import CoinGoal from './pages/CoinGoal/CoinGoal'
import Feed from './pages/Feed/Feed'
import Map from './pages/Map/Map'
import ParentProfile from './pages/ParentProfile/ParentProfile'

// TODO: Not being used currently

import ChoreBoard from './pages/ChoreBoard/ChoreBoard'
import Dashboard from './pages/Dashboard/Dashboard'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Onboarding from './pages/Onboarding/Onboarding'
import Chores from './pages/Chores/Chores'
import TaskList from './pages/TaskList/TaskList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// redux actions
import { setCurrentUser } from '../src/actions'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as taskService from './services/taskService'

// styles
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  const handleLogout = () => {
    authService.logout()
    dispatch(setCurrentUser(profile.user, null))
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    dispatch(setCurrentUser(profile, authService.getUser()))
  }

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch(setCurrentUser(profile, authService.getUser()))
      console.log('profileID:', authService.getUser())
      console.log('profile:', profile.user)
      // const profile = await profileService.showProfile(user.userId)
      // setProfile(profile)
    }
    fetchProfile()
  }, [])


  const handleAddChild = async (childData) => {
    try {
      await profileService.createChild(profile.user, childData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='app'>
      <Routes>
        <Route
          path="/"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
          path="/onboarding"
          element={<Landing user={profile.user} Onboarding={Onboarding}
        />} />
        <Route
          path="/createparentprofile"
          element={
            //<ProtectedRoute user={user}>
              <CreateParentProfile />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/createparentprofile/setup"
          element={
            //<ProtectedRoute user={user}>
              <CreateParentProfileSetup />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/createkidprofile"
          element={
            //<ProtectedRoute user={user}>
              <CreateKidProfile />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/createkidprofile/setup"
          element={
            //<ProtectedRoute user={user}>
              <CreateKidProfileSetup />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/coingoal"
          element={
            //<ProtectedRoute user={user}>
              <CoinGoal />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            //<ProtectedRoute user={user}>
              <Feed />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            //<ProtectedRoute user={user}>
              <Map />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/parentprofile"
          element={
            //<ProtectedRoute user={user}>
              <ParentProfile />
            //</ProtectedRoute>
          }
        />


        {/* TODO: Routes not being used currently*/}
        <Route
          path="/choreboard"
          element={
            //<ProtectedRoute user={user}>
              <ChoreBoard />
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
          path="/kidChores"
          element= {
            <KidChores />
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


      <NavBar user={profile.user} handleLogout={handleLogout} />
    </div>
  )
}

export default App
