import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signedInReducer from './signedInReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth : signedInReducer,
    form: formReducer,
    streams: streamReducer
})

