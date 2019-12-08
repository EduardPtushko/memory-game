import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../common/components/NavBar/NavBar';
import ColorLists from '../../common/components/ColorLists/ColorLists';
import { newColors, opennedColors } from '../../common/helpers';
import Message from '../../common/components/UIElements/Message/Message';
import Modal from '../../common/components/UIElements/Modal/Modal';
import { ColorElement } from '../../types';
import { createResultThunk } from '../Result/Resulsts/thunks';
import { AppState } from '../../app/rootReducer';

interface Props {
    numberInitialColors: number;
}

interface ColorsState {
    colors: ColorElement[];
    previousId: null | number;
}

const App = ({ numberInitialColors }: Props): JSX.Element => {
    const [colorsState, setColorsState] = React.useState<ColorsState>(() => ({
        colors: newColors(numberInitialColors),
        previousId: null
    }));

    const [clicks, setClicks] = React.useState(0);
    const [gameOver, setGameOver] = React.useState(false);
    const [numberColors, setNumberColors] = React.useState(numberInitialColors);
    const dispatch = useDispatch();

    const token = useSelector(
        (state: Pick<AppState, 'auth'>) => state.auth.token
    );

    const onSetColors = (colors: ColorElement[], colorId: number): void => {
        setColorsState({
            colors,
            previousId: colorId
        });
    };

    const handleClick = useCallback(
        (colorId: number): void => {
            const { colors, previousId } = { ...colorsState };
            const openned = opennedColors(colors);
            colors[colorId].open = true;

            if (openned % 2 !== 0) {
                if (
                    colors[previousId as number].bcgColor !==
                    colors[colorId].bcgColor
                ) {
                    setTimeout(() => {
                        colors[previousId as number].open = false;
                        colors[colorId].open = false;

                        onSetColors(colors, colorId);
                    }, 300);
                } else {
                    onSetColors(colors, colorId);
                }
            } else {
                onSetColors(colors, colorId);
            }
            setClicks(click => click + 1);

            if (colors.every(el => el.open === true)) {
                setGameOver(true);
            }
        },
        [colorsState]
    );

    const onNewGame = (num: number): void => {
        setColorsState({
            colors: newColors(num),
            previousId: null
        });
    };

    const onCloseModal = (): void => {
        if (token) {
            dispatch(
                createResultThunk({ clicks, colors: numberColors }, token)
            );
        }
        onNewGame(numberColors);
        setClicks(0);
        setGameOver(false);
    };

    const onNumberColorsChange = (num: number): void => {
        setNumberColors(num);
    };

    return (
        <>
            <NavBar
                newGame={onNewGame}
                getNumberColors={onNumberColorsChange}
                initialValue={numberInitialColors}
                numberColors={numberColors}
            />
            {gameOver && (
                <Modal show={gameOver} onClose={onCloseModal}>
                    <Message clicks={clicks} />
                </Modal>
            )}

            <ColorLists colors={colorsState.colors} clicked={handleClick} />
        </>
    );
};

App.defaultProps = {
    numberInitialColors: 5
};

export default App;
