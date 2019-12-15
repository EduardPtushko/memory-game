import gameReducer, { initialState } from '../reducer';
import { ActionTypes } from '../types';

describe('Game Reducer', (): void => {
    test('return initial state', (): void => {
        const state = gameReducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handle actions of type CHANGE_COLORS_NUMBER', (): void => {
        const action = { type: ActionTypes.CHANGE_COLORS_NUMBER, payload: 6 };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            numberColors: 6
        });
    });

    test('handle actions of type NEW_GAME', (): void => {
        const payload = 6;
        const action = {
            type: ActionTypes.NEW_GAME,
            payload
        };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            colors: expect.any(Array),
            numberColors: payload
        });
    });

    test('handle actions of type GAME_OVER', (): void => {
        const action = {
            type: ActionTypes.GAME_OVER
        };

        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            gameOver: true
        });
    });

    test('handle actions of type OPEN_COLOR', (): void => {
        const colorId = 6;
        const action = {
            type: ActionTypes.OPEN_COLOR,
            payload: colorId
        };
        const state = gameReducer(initialState, action);

        expect(state).toEqual({
            ...initialState,
            clicks: 1,
            colors: expect.any(Array),
            currColor: state.colors[colorId]
        });
        expect(state.colors[colorId].open).toBeTrue();
    });
});
