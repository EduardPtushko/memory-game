import {
    signupSuccess,
    signinSuccess,
    signError,
    signStarted
} from './actions';
import { signupUser, signinUser } from '../../../api';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AuthState } from './types';
import { Action } from 'redux';
import { AxiosError } from 'axios';

interface Data {
    username: string;
    email: string;
    password: string;
}

export const signupThunk = (
    data: Data
): ThunkAction<void, AuthState, null, Action<string>> => (
    dispatch: ThunkDispatch<AuthState, null, Action>
): void => {
    dispatch(signStarted());
    setTimeout((): void => {
        signupUser(data)
            .then(({ data: { token, username } }) => {
                dispatch(signupSuccess({ token, username }));
            })
            .catch((error: AxiosError) => {
                if (error.response !== undefined) {
                    dispatch(signError(error.response.data.error));
                }
            });
    }, 500);
};

export const siginThunk = (
    data: Omit<Data, 'username'>
): ThunkAction<void, AuthState, null, Action<string>> => (
    dispatch: ThunkDispatch<AuthState, null, Action>
): void => {
    dispatch(signStarted());

    setTimeout((): void => {
        signinUser(data)
            .then(({ data: { token, username } }) => {
                dispatch(signinSuccess({ token, username }));
            })
            .catch((error: AxiosError) => {
                if (error.response !== undefined) {
                    dispatch(signError(error.response.data));
                }
            });
    }, 500);
};
