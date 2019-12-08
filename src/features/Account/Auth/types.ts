export enum ActionTypes {
    SIGN_FAILED = 'SIGN_FAILED',
    SIGN_STARTED = 'SIGN_STARTED',
    SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED',
    SIGN_UP_SUCCEEDED = 'SIGN_UP_SUCCEEDED',
    SIGN_OUT = 'SIGN_OUT',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface AuthState {
    username: string | null;
    token: string | null;
    error: string | null;
    isLoading: boolean;
}

export interface SignUpSuccess {
    type: ActionTypes.SIGN_UP_SUCCEEDED;
    payload: {
        token: string;
        username: string;
    };
}

export interface SignInSuccess {
    type: ActionTypes.SIGN_IN_SUCCEEDED;
    payload: {
        token: string;
        username: string;
    };
}

export interface SignError {
    type: ActionTypes.SIGN_FAILED;
    payload: string;
}

export interface SignStarted {
    type: ActionTypes.SIGN_STARTED;
}

export interface SignOut {
    type: ActionTypes.SIGN_OUT;
}
export interface ClearError {
    type: ActionTypes.CLEAR_ERROR;
}

export type Action =
    | SignUpSuccess
    | SignError
    | SignOut
    | SignInSuccess
    | SignStarted
    | ClearError;
