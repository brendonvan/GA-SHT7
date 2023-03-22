import { combineReducers } from 'redux'
import loggedReducer from './isLogged'
import profileReducer from './profile'
import addChildProfileReducer from './addChildProfile'
import navbarReducer from './navbar'

const allReducers = combineReducers({
    loggedReducer, 
    profileReducer,
    addChildProfileReducer,
    navbarReducer
})

export default allReducers;