import { ActionTypes, Action, ResultsState } from './types';

const initialState: ResultsState = {
    results: [],
    error: null,
    isLoading: false
};

function resultsReducer(state = initialState, action: Action): ResultsState {
    switch (action.type) {
        case ActionTypes.FETCH_RESULTS_SUCCEEDED:
            return {
                ...state,
                results: action.payload,
                isLoading: false
            };
        case ActionTypes.CREATE_RESULT_SUCCEEDED:
            return {
                ...state,
                results: state.results.concat(action.payload),
                isLoading: false
            };
        case ActionTypes.FETCH_RESULTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case ActionTypes.FETCH_RESULTS_STARTED:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state;
    }
}

export default resultsReducer;
