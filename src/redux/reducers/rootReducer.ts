import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export default rootReducer;
