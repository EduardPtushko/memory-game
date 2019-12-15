import { ColorElement } from '../../../types';

export enum ActionTypes {
    NEW_GAME = 'NEW_GAME',
    CHANGE_COLORS_NUMBER = 'CHANGE_COLORS_NUMBER',
    OPEN_COLOR = 'OPEN_COLOR',
    CLOSE_COLOR = 'CLOSE_COLOR',
    GAME_OVER = 'GAME_OVER'
}

export interface GameState {
    clicks: number;
    gameOver: boolean;
    numberColors: number;
    colors: ColorElement[];
    prevColor: null | ColorElement;
    currColor: null | ColorElement;
}

export interface ChangeColorsNumber {
    type: ActionTypes.CHANGE_COLORS_NUMBER;
    payload: number;
}
export interface NewGame {
    type: ActionTypes.NEW_GAME;
    payload: number;
}

export interface OpenColor {
    type: ActionTypes.OPEN_COLOR;
    payload: number;
}

export interface CloseColor {
    type: ActionTypes.CLOSE_COLOR;
}

export interface GameOver {
    type: ActionTypes.GAME_OVER;
}

export type Action =
    | NewGame
    | ChangeColorsNumber
    | OpenColor
    | CloseColor
    | GameOver;
