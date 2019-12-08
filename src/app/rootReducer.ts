import { combineReducers } from 'redux';
import authReducer from '../features/Account/Auth/reducer';
import resultsReducer from '../features/Result/Resulsts/reducer';

export const reducers = combineReducers({
    auth: authReducer,
    results: resultsReducer
});

export type AppState = ReturnType<typeof reducers>;
