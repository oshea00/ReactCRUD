import actions from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (userid) => {
    return {
        type: actions.SIGNED_IN,
        payload: userid
    }
};

export const signOut = () => {
    return {
        type: actions.SIGNED_OUT
    }
};

export const createStream = values => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams',{...values, userId});
    dispatch({
        type: actions.CREATE_STREAM,
        payload: response.data
    });
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: actions.FETCH_STREAMS,
        payload: response.data
    });
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch ({
        type: actions.FETCH_STREAM,
        payload: response.data
    });
}

export const editStream = (id,values) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`,values);
    dispatch ({
        type: actions.EDIT_STREAM,
        payload: response.data
    })
    history.push('/');
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: actions.DELETE_STREAM,
        payload: id
    });
    history.push('/');

}