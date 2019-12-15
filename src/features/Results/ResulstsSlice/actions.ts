import {
    ActionTypes,
    FetchResultsSucceeded,
    FetchResultsFailed,
    FetchResultsStarted,
    CreateResultSucceeded
} from './types';
import { Result } from '../../../types';

export const fetchResultsSucceeded = (
    results: Result[]
): FetchResultsSucceeded => {
    return {
        type: ActionTypes.FETCH_RESULTS_SUCCEEDED,
        payload: results
    };
};

export const createResultSucceeded = (
    result: Result
): CreateResultSucceeded => {
    return {
        type: ActionTypes.CREATE_RESULT_SUCCEEDED,
        payload: result
    };
};

export const fetchResultsFailed = (error: string): FetchResultsFailed => {
    return {
        type: ActionTypes.FETCH_RESULTS_FAILED,
        payload: error
    };
};

export const fetchResultsStarted = (): FetchResultsStarted => {
    return {
        type: ActionTypes.FETCH_RESULTS_STARTED
    };
};
