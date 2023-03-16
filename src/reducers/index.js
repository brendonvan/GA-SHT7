import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import profileReducer from './profile';

const allReducers = combineReducers({
    loggedReducer, 
    profileReducer
})

export default allReducers;