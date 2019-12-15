import { combineReducers } from 'redux';
import authReducer from '../features/Auth/AuthSlice/reducer';
import resultsReducer from '../features/Results/ResulstsSlice/reducer';
import gameReducer from '../features/Game/GameSlice/reducer';

export const reducers = combineReducers({
    auth: authReducer,
    results: resultsReducer,
    game: gameReducer
});

export type AppState = ReturnType<typeof reducers>;
