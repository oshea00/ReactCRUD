import actions from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

const signedInReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SIGNED_IN :
            return  {...state, isSignedIn: true, userId: action.payload };
        case actions.SIGNED_OUT :
            return  {...state, isSignedIn: false, userId: null };
        default : return state;
    }
}

export default signedInReducer;