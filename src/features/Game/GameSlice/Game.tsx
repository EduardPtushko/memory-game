import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import ColorLists from '../components/ColorLists/ColorLists';
import Message from '../../../common/components/Message/Message';
import Modal from '../../../common/components/Modal/Modal';
import { createResultThunk } from '../../Results/ResulstsSlice/thunks';
import { AppState } from '../../../app/rootReducer';
import {
    newGame,
    changeColorsNumber,
    openColor,
    closeColor,
    setGameOver
} from './actions';
import { opennedColors } from '../../../common/helpers';

const App = (): JSX.Element => {
    const { colors, numberColors, gameOver, clicks } = useSelector(
        (state: Pick<AppState, 'game'>) => state.game
    );
    const token = useSelector(
        (state: Pick<AppState, 'auth'>) => state.auth.token
    );
    const dispatch = useDispatch();

    useEffect((): (() => void) => {
        const isOver = opennedColors(colors) === numberColors * 2;

        if (isOver) {
            dispatch(setGameOver());
        }
        let timerId;

        if (clicks !== 0 && gameOver !== true) {
            if (clicks % 2 === 0) {
                timerId = setTimeout(() => {
                    dispatch(closeColor());
                }, 300);
            }
        }

        return (): void => {
            clearTimeout(timerId);
        };
    }, [clicks]);

    const handleClick = (colorId: number): void => {
        dispatch(openColor(colorId));
    };

    const onNewGame = (): void => {
        dispatch(newGame(numberColors));
    };

    const onModalClose = (): void => {
        if (token) {
            dispatch(
                createResultThunk({ clicks, colors: numberColors }, token)
            );
        }
        dispatch(newGame(numberColors));
    };

    const onNumberColorsChange = (num: number): void => {
        dispatch(changeColorsNumber(num));
    };

    return (
        <>
            <NavBar
                newGame={onNewGame}
                getNumberColors={onNumberColorsChange}
                initialValue={numberColors}
            />
            {gameOver && (
                <Modal show={gameOver} onClose={onModalClose}>
                    <Message clicks={clicks} />
                </Modal>
            )}

            <ColorLists colors={colors} clicked={handleClick} />
        </>
    );
};

export default App;
