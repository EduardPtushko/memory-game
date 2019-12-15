import { newColors } from '../../../common/helpers';
import { ActionTypes, Action, GameState } from './types';

export const initialState: GameState = {
    clicks: 0,
    gameOver: false,
    numberColors: 5,
    colors: newColors(5),
    prevColor: null,
    currColor: null
};

function gameReducer(state = initialState, action: Action): GameState {
    switch (action.type) {
        case ActionTypes.NEW_GAME:
            return {
                ...initialState,
                numberColors: action.payload,
                colors: newColors(action.payload)
            };

        case ActionTypes.CHANGE_COLORS_NUMBER:
            return {
                ...state,
                numberColors: action.payload
            };

        case ActionTypes.GAME_OVER:
            return {
                ...state,
                gameOver: true,
                prevColor: null,
                currColor: null
            };

        case ActionTypes.OPEN_COLOR: {
            const newStateColors = state.colors.map(color =>
                color.id === action.payload ? { ...color, open: true } : color
            );

            return {
                ...state,
                clicks: state.clicks + 1,
                colors: newStateColors,
                prevColor: state.currColor,
                currColor: newStateColors[action.payload]
            };
        }

        case ActionTypes.CLOSE_COLOR: {
            const { prevColor, currColor } = state;

            if (prevColor && currColor) {
                if (prevColor.bcgColor !== currColor.bcgColor) {
                    const newStateColors = state.colors.map(color =>
                        color.id === prevColor.id || color.id === currColor.id
                            ? { ...color, open: false }
                            : color
                    );

                    return {
                        ...state,
                        colors: newStateColors,
                        prevColor: null,
                        currColor: null
                    };
                }
            }
            return state;
        }

        default:
            return state;
    }
}

export default gameReducer;
