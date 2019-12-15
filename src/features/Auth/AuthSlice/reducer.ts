import { ActionTypes, Action, AuthState } from './types';

const initialState: AuthState = {
    username: null,
    token: null,
    error: null,
    isLoading: false
};

function authReducer(state = initialState, action: Action): AuthState {
    switch (action.type) {
        case ActionTypes.SIGN_UP_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            };
        case ActionTypes.SIGN_IN_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            };
        case ActionTypes.SIGN_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case ActionTypes.SIGN_STARTED:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ActionTypes.SIGN_OUT:
            return {
                ...state,
                error: null,
                token: null,
                isLoading: false,
                username: null
            };
        case ActionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export default authReducer;
