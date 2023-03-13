import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import userReducer from './user';
import counterReducer from './counter';

const allReducers = combineReducers({
    loggedReducer, 
    userReducer,
    counterReducer
})

export default allReducers;