import { combineReducers } from 'redux'
import loggedReducer from './isLogged'
import profileReducer from './profile'
import addChildProfileReducer from './addChildProfile'

const allReducers = combineReducers({
    loggedReducer, 
    profileReducer,
    addChildProfileReducer
})

export default allReducers;