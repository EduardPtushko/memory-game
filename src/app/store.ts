import { applyMiddleware, createStore, compose, Store } from 'redux';
import { reducers } from './rootReducer';
import thunk from 'redux-thunk';
import { getFromLocalStorage } from '../common/helpers';

export const configStore = (): Store => {
    const storeEnhancer = process.env.NODE_ENV
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

    const middlewares = applyMiddleware(thunk);

    const store = createStore(
        reducers,
        {
            auth: {
                ...getFromLocalStorage('memory-game-data'),
                isLoading: false,
                error: null
            }
        },
        storeEnhancer(middlewares)
    );

    return store;
};
