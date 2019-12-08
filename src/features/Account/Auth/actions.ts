import {
    ActionTypes,
    SignUpSuccess,
    SignInSuccess,
    SignError,
    SignOut,
    SignStarted,
    ClearError
} from './types';

export const signupSuccess = (data: {
    token: string;
    username: string;
}): SignUpSuccess => {
    localStorage.setItem('memory-game-data', JSON.stringify(data));

    return {
        type: ActionTypes.SIGN_UP_SUCCEEDED,
        payload: data
    };
};

export const signinSuccess = (data: {
    token: string;
    username: string;
}): SignInSuccess => {
    localStorage.setItem('memory-game-data', JSON.stringify(data));

    return {
        type: ActionTypes.SIGN_IN_SUCCEEDED,
        payload: data
    };
};

export const signError = (error: string): SignError => {
    return {
        type: ActionTypes.SIGN_FAILED,
        payload: error
    };
};

export const signOut = (): SignOut => {
    localStorage.removeItem('memory-game-data');

    return {
        type: ActionTypes.SIGN_OUT
    };
};

export const signStarted = (): SignStarted => {
    return {
        type: ActionTypes.SIGN_STARTED
    };
};

export const clearError = (): ClearError => {
    return {
        type: ActionTypes.CLEAR_ERROR
    };
};
