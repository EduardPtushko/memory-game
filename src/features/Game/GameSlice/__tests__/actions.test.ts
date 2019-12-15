import {
    newGame,
    changeColorsNumber,
    openColor,
    closeColor,
    setGameOver
} from '../actions';
import { ActionTypes } from '../types';

describe('Game Actions', (): void => {
    test('should generate new game action object', (): void => {
        const number = 5;
        const action = newGame(number);

        expect(action).toEqual({
            type: ActionTypes.NEW_GAME,
            payload: number
        });
    });

    test('should generate change in number of colors action object', (): void => {
        const newNumber = 7;
        const action = changeColorsNumber(newNumber);

        expect(action).toEqual({
            type: ActionTypes.CHANGE_COLORS_NUMBER,
            payload: newNumber
        });
    });

    test('should generate open color action object', (): void => {
        const colorId = 3;
        const action = openColor(colorId);

        expect(action).toEqual({
            type: ActionTypes.OPEN_COLOR,
            payload: colorId
        });
    });

    test('should generate close color action object', (): void => {
        const action = closeColor();

        expect(action).toEqual({
            type: ActionTypes.CLOSE_COLOR
        });
    });
    test('should generate game over action object', (): void => {
        const action = setGameOver();

        expect(action).toEqual({
            type: ActionTypes.GAME_OVER
        });
    });
});
