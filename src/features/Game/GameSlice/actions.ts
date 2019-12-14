import {
    ActionTypes,
    NewGame,
    ChangeColorsNumber,
    OpenColor,
    CloseColor,
    GameOver
} from './types';

export const newGame = (num: number): NewGame => {
    return {
        type: ActionTypes.NEW_GAME,
        payload: num
    };
};

export const changeColorsNumber = (num: number): ChangeColorsNumber => {
    return {
        type: ActionTypes.CHANGE_COLORS_NUMBER,
        payload: num
    };
};

export const openColor = (colorId: number): OpenColor => {
    return {
        type: ActionTypes.OPEN_COLOR,
        payload: colorId
    };
};

export const closeColor = (): CloseColor => {
    return {
        type: ActionTypes.CLOSE_COLOR
    };
};

export const setGameOver = (): GameOver => {
    return {
        type: ActionTypes.GAME_OVER
    };
};
