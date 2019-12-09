import { Result } from '../../../types/index';

export enum ActionTypes {
    FETCH_RESULTS_FAILED = 'FETCH_RESULTS_FAILED',
    FETCH_RESULTS_STARTED = 'FETCH_RESULTS_STARTED',
    FETCH_RESULTS_SUCCEEDED = 'FETCH_RESULTS_SUCCEEDED',
    CREATE_RESULT_SUCCEEDED = 'CREATE_RESULT_SUCCEEDED'
}

export interface ResultsState {
    results: Result[];
    error: string | null;
    isLoading: boolean;
}

export interface FetchResultsSucceeded {
    type: ActionTypes.FETCH_RESULTS_SUCCEEDED;
    payload: Result[];
}

export interface FetchResultsFailed {
    type: ActionTypes.FETCH_RESULTS_FAILED;
    payload: string;
}

export interface FetchResultsStarted {
    type: ActionTypes.FETCH_RESULTS_STARTED;
}

export interface CreateResultSucceeded {
    type: ActionTypes.CREATE_RESULT_SUCCEEDED;
    payload: Result;
}

export type Action =
    | FetchResultsStarted
    | FetchResultsFailed
    | FetchResultsSucceeded
    | CreateResultSucceeded;
