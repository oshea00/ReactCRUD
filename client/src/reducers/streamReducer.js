import actions from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {}

const streamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.CREATE_STREAM :
            return {...state, [action.payload.id]: action.payload };
        case actions.FETCH_STREAM :
            return {...state, [action.payload.id]: action.payload };
        case actions.EDIT_STREAM :
            return {...state, [action.payload.id]: action.payload };
        case actions.DELETE_STREAM :
            return _.omit(state, action.payload);
        case actions.FETCH_STREAMS :
            return {...state, ..._.mapKeys(action.payload,'id') };
        default: 
            return state;
    }
}

export default streamReducer;

