import {
    fetchResultsStarted,
    fetchResultsSucceeded,
    fetchResultsFailed,
    createResultSucceeded
} from './actions';
import { fetchResults, createResult } from '../../../api';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { AxiosError } from 'axios';
import { ResultsState } from './types';

interface Data {
    clicks: number;
    colors: number;
}

export const fetchResultsThunk = (
    token: string
): ThunkAction<void, ResultsState, null, Action<string>> => (
    dispatch: ThunkDispatch<ResultsState, null, Action>
): void => {
    dispatch(fetchResultsStarted());

    fetchResults(token)
        .then(res => {
            dispatch(fetchResultsSucceeded(res.data));
        })
        .catch((error: AxiosError) => {
            if (error.response !== undefined) {
                dispatch(fetchResultsFailed(error.response.data.error));
            }
        });
};
export const createResultThunk = (
    data: Data,
    token: string
): ThunkAction<void, ResultsState, null, Action<string>> => (
    dispatch: ThunkDispatch<ResultsState, null, Action>
): void => {
    createResult(data, token)
        .then(res => {
            dispatch(createResultSucceeded(res.data));
        })
        .catch((error: AxiosError) => {
            console.error(error);
        });
};
